# Thelio Astra (Ubuntu 20.04 LTS Setup)

Thelio Astra is unique in using an Ampere processor supporting aarch64 versions of Linux. The Ubuntu 20.04 LTS operating system is currently supported on this hardware after performing custom software setup tasks.

## Operating System download

- Download the Ubuntu Server for ARM 20.04.5 LTS ISO from [this link](https://cdimage.ubuntu.com/releases/20.04/release/ubuntu-20.04.5-live-server-arm64.iso).
- Verify that `sha256sum ubuntu-20.04.5-live-server-arm64.iso` has the following output:
```
e42d6373dd39173094af5c26cbf2497770426f42049f8b9ea3e60ce35bebdedf *ubuntu-20.04.5-live-server-arm64.iso
```

## Hardware preparation

- It is recommended that all 8 memory channels are filled for best CPU performance.
- When using lower core count CPUs, the first two PCIe x16 slots (closest to the CPU) will run at x8 speeds. Place x16 devices into the last two slots for optimal performance.
- Install all required hardware before Operating System installation, including GPUs and WiFi cards.
- The system firmware version must be `3.02` in order to support early boot output on NVIDIA GPUs.
- There is a jumper labeled `BMC disable` that can bypass the requirement that the BMC boots before the power button is functional.
    - Because the BMC may be necessary to complete the initial setup, use of this jumper is not recommended until initial setup is complete.
    - Bridging the second and third pins disables the BMC. The default behavior (enabling the BMC) is the same as if the first and second pins are bridged.

## Firmware preparation

- Plug the last ethernet port (closest to the PCIe slots) in to a DHCP capable network, where you already have another computer connected. This is the BMC's ethernet port, which will enable remote server management.
- Power on the system. Press the `F2` key when the firmware splash screen appears to enter the firmware setup menu. 
- Navigate to the `Advanced` tab, then select the `Network Stack Configuration` item. Switch `Network Stack` to `Disabled`. This will reduce boot times by disabling network booting, which will not be used in this guide.
- Navigate to the `Server Mgmt` tab, then select the `BMC Network Configuration` item. Note the `Station IP address`, which is how you will connect to the BMC's web interface later.
- Navigate to the `Exit` tab, and choose `Save Changes and Exit`. When prompted, select yes.
- After the system reboots, power it off to prepare for the next task.

## BMC interface preparation

- Open a web browser on another computer that is on the same network as the BMC. Navigate to the URL https://AAA.BBB.CCC.DDD, replacing AAA.BBB.CCC.DDD with the Station IP address recorded before. 
- A login screen should appear. The default username is `root` and the default password is `0penBmc`. Be sure to copy paste these values, the default password starts with a zero `0` instead of the letter `O`.
- Under the `Operations` menu, select the `Virtual media` item. Click on `Add file`, and in the `File Upload` dialog, choose the `ubuntu-20.04.5-live-server-arm64.iso` file that you downloaded and verified before. Click on `Start`, and a notification should briefly appear in the top right corner indicating success.
- Under the `Operations` menu, select the `SOL console` item. This will show the system's serial output, which will shwo Linux kernel output if it does not show up on the connected display.

## Operating System install

- Plug the second to last ethernet port (next to the BMC's ethernet port) in to a DHCP capable network with internet access.
- Power on the system. Press the `F11` key when the firmware splash screen appears to open the boot menu.
- In the boot menu, select the option that starts with `UEFI OS (Linux File-Stor Gadget`
- Navigate to the `Boot and Install with the HWE kernel` option and press `e` to edit it.
- Move the cursor to the line starting with `linux`, replace `quiet splash` with `console=tty0 nomodeset fsck.mode=skip` between `/casper/hwe-vmlinuz` and `---` ensuring that there are spaces before and after these added arguments. Press `F10` to boot. The first added argument `console=tty0` tries to get Linux console output to show up on a connected display. The second added argument `nomodeset` works around potential nouveau crashes when NVIDIA cards are used. The third added argument `fsck.mode=skip` will skip filesystem checks which take a long time.
- It will take some time to boot to the installer. If no output is seen, check the `Serial over LAN (SOL) console` page in the BMC web interface.
- Select the desired language.
- If you are prompted to apply an installer update, choose `Continue without updating`.
- On the `Keyboard configuration` page, select the desired keyboard layout and variant. Select `Done` to continue.
- On the `Network configuration` page, you should have a successfully connected ethernet port. Select `Done` to continue.
- On the `Proxy configuration` page, enter any required proxy (this should almost always be left blank). Select `Done` to continue.
- On the `Ubuntu archive mirror configuration` page, the default mirror for packages will be tested. When it completes, select `Done` to continue.
- On the `Guided storage configuration` page, select `Use an entire disk`, and choose the desired disk. Leave the `Set up this disk as an LVM group` option enabled. Select `Done` to continue.
- On the `Storage configuration` page, you can review the disk configuration. Select `Done` to continue. A warning will be shown, select `Continue`.
- On the `Profile setup` page, enter the following information:
  - `Your name:` `System76`
  - `Your servers name:` `system76-pc`
  - `Pick a username:` `system76`
  - `Choose a password:` `system76`
  - `Confirm your password:` `system76`
- On the `SSH setup` page, leave `Install OpenSSH server` unselected. Select `Done` to continue.
- On the `Third-party drivers` page, leave any aptions unselected. Select `Continue` to continue.
- On the `Featured Server Snaps` page, leave all options unselected. Select `Done` to continue.
- On the `Installing system` page, installation progress will be shown. This may take some time to finish. When it is complete, select `Reboot Now`.
- You may be prompted to remove the installation medium. Navigate in the BMC web interface to the `Operations` menu and `Virtual media` page. Click on the `Stop` button. A notification should briefly appear in the top right corner indicating success. Press enter on the system to reboot.

## Desktop environment install

- The system will boot to a terminal login prompt. Log in with `system76` as the username and `system76` as the password.
    - You may need to log in with the BMC serial console if the physical display does not show a prompt.
- Upgrade the system with the following commands:
```
sudo apt update
sudo apt full-upgrade
```
- Install the NVIDIA driver with the following command. The 550 driver is currently only packaged with the server variant for 20.04.
```
sudo apt install nvidia-driver-550-server
```
- Install the default Ubuntu desktop environment with the following command. This will download a lot of packages and take a while to install:
```
sudo apt install ubuntu-desktop
```
- At this point, NetworkManager will be installed alongside systemd-networkd. This will cause boot delays as they both wait for network completion. The following steps will disable systemd-networkd in favor of NetworkManager, which has better integration with the Ubuntu desktop. These instructions were adapted from https://cloudspinx.com/disable-systemd-networkd-on-ubuntu-linux/.
    - Disable and mask systemd-networkd services with the following commands:
```
sudo systemctl disable systemd-networkd.service systemd-networkd.socket
sudo systemctl mask systemd-networkd.service systemd-networkd.socket
```
    - Edit the netplan configuration with `sudo nano /etc/netplan/00-installer-config.yaml` and replace all the contents with the following:
```
network:
  version: 2
  renderer: NetworkManager
```
    - Regenerate netplan configuration by running the following command:
```
sudo netplan generate
```
- Reboot by running `sudo reboot`.
- You should see a login screen, where you can log in to the `System76` user with the password `system76`.
    - If you don't see a login screen, try a different display connection type (e.g. DisplayPort instead of HDMI) and/or a different display.
- After logging in, initial setup will appear. On the `Online Acconts` page, click on `Skip` to continue.
- On the `Livepatch` page, click on `Next` to continue.
- On the `Help improve Ubuntu` page, select `No, don't send system info`. Click on `Next` to continue.
- On the `Privacy` page, leave `Location Services` unselected. Click on `Next` to continue.
- On the `Ready to go` page, click on `Done`.
- Additional ethernet connections will repeatedly fail to connect. Run `nm-connnection-editor` to open the connection manager and remove them.


## System76 driver install

- Ensure that DMI information is properly set at this point. If not, set it and reboot.
- Add the System76 PPA with the following command:
```
sudo add-apt-repository ppa:system76-dev/stable
```
- Install the System76 driver with the following command:
```
sudo apt install system76-driver
```
- Upgrade the system with the following commands. This may downgrade some packages as they pull the version from the System76 PPA:
```
sudo apt update
sudo apt full-upgrade
```
- Reboot the system with `sudo reboot`.