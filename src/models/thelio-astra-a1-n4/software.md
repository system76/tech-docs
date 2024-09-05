# Thelio Astra (Software Setup)

Thelio Astra is unique in using an Ampere processor supporting aarch64 versions of Linux. The Ubuntu 24.04 operating system is currently supported on this hardware after performing custom software setup tasks.

## Operating System download

- Download the Ubuntu Server for ARM 24.04.1 LTS ISO from [this link](https://cdimage.ubuntu.com/releases/24.04/release/ubuntu-24.04.1-live-server-arm64.iso).
- Verify that `sha256sum ubuntu-24.04.1-live-server-arm64.iso` has the following output:
```
5ceecb7ef5f976e8ab3fffee7871518c8e9927ec221a3bb548ee1193989e1773 *ubuntu-24.04.1-live-server-arm64.iso
```

## Hardware preparation

- It is recommended that all 8 memory channels are filled for best CPU performance.
- When using lower core count CPUs, the first two PCIe x16 slots (closest to the CPU) will run at x8 speeds. Place x16 devices into the last two slots for optimal performance.
- Install all required hardware before Operating System installation, including GPUs and WiFi cards.
- The system firmware version must be `3.02` in order to support early boot output on NVIDIA GPUs.
- There is a jumper labeled `BMC disable` that can bypass the requirement that the BMC boots before the power button is functional.

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
- Under the `Operations` menu, select the `Virtual media` item. Click on `Add file`, and in the `File Upload` dialog, choose the `ubuntu-24.04.1-live-server-arm64.iso` file that you downloaded and verified before. Click on `Start`, and a notification should briefly appear in the top right corner indicating success.
- Under the `Operations` menu, select the `SOL console` item. This will show the system's serial output, which will shwo Linux kernel output if it does not show up on the connected display.

## Operating System install

- Plug the second to last ethernet port (next to the BMC's ethernet port) in to a DHCP capable network with internet access.
- Power on the system. Press the `F11` key when the firmware splash screen appears to open the boot menu.
- In the boot menu, select the option that starts with `UEFI OS (Linux File-Stor Gadget`
- Hold the escape key to cancel the GRUB menu timeout.
- Navigate to the `Try or Install Ubuntu Server` option and press `e` to edit it.
- Move the cursor to the line starting with `linux`, add `console=tty0 nomodeset` between `/casper/vmlinuz` and `---` ensuring that there are spaces before and after these added arguments. Press `F10` to boot. The first added argument `console=tty0` tries to get Linux console output to show up on a connected display. The second added argument `nomodeset` works around potential nouveau crashes when NVIDIA cards are used.
- It will take some time to boot to the installer. If no output is seen, check the `Serial over LAN (SOL) console` page in the BMC interface.
- Select the desired language.
- On the `Keyboard configuration` page, select the desired keyboard layout and variant. Select `Done` to continue.
- On the `Choose the type of installation` page, select `Ubuntu Server`. Select `Done` to continue.
- On the `Network configuration` page, you should have a successfully connected ethernet port. Select `Done` to continue.
- On the `Proxy configuration` page, enter any required proxy (this should almost always be left blank). Select `Done` to continue.
- On the `Ubuntu archive mirror configuration` page, the default mirror for packages will be tested. When it completes, select `Done` to continue.
- On the `Guided storage configuration` page, select `Use an entire disk`, and choose the desired disk. Select `Done` to continue.
- On the `Storage configuration` page, you can review the disk configuration. Select `Done` to continue. A warning will be shown, select `Continue`.
- On the `Profile configuration` page, enter the following information:
  - `Your name:` `System76`
  - `Your servers name:` `system76-pc`
  - `Pick a username:` `system76`
  - `Choose a password:` `system76`
  - `Confirm your password:` `system76`
- On the `Upgrade to Ubuntu Pro` page, select `Skip for now`. Select `Done` to continue.
- On the `SSH configuration` page, leave `Install OpenSSH server` unselected. Select `Done` to continue.
- On the `Featured server snaps` page, leave all options unselected. Select `Done` to continue.
- On the `Installing system` page, installation progress will be shown. This may take some time to finish. When it is complete, select `Reboot Now`.
- You may be prompted to remove the installation medium. Navigate in the BMC web interface to the `Operations` menu and `Virtual media` page. Click on the `Stop` button. A notification should briefly appear in the top right corner indicating success. Press enter on the system to reboot.

## Desktop environment install

- The system will boot to a terminal login prompt. Log in with `system76` as the username and `system76` as the password.
- Upgrade the system with the following commands:
```
sudo apt-get update
sudo apt-get dist-upgrade
```
- Install the NVIDIA driver with the following command:
```
sudo apt-get install nvidia-driver-550
```
- Install the default Ubuntu desktop environment with the following command. This will download a lot of packages and take a while to install:
```
sudo apt-get install ubuntu-desktop
```
- At this point, NetworkManager will be installed alongside systemd-networkd. This will cause boot delays as they both wait for network completion. The following steps will disable systemd-networkd in favor of NetworkManager, which has better integration with the Ubuntu desktop. These instructions were adapted from https://cloudspinx.com/disable-systemd-networkd-on-ubuntu-linux/.
- Disable and mask systemd-networkd services with the following commands:
```
sudo systemctl disable systemd-networkd.service systemd-networkd.socket
sudo systemctl mask systemd-networkd.service systemd-networkd.socket
```
- Edit the netplan configuration with `sudo nano /etc/netplan/50-cloud-init.yaml` and replace all the contents with the following:
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
- After logging in, initial setup will appear. Click on `Next` to continue.
- On the `Ubuntu Pro` page, select `Skip for now`. Click on `Next` to continue.
- On the `Help improve Ubuntu` page, select `No, don't share system data`. Click on `Next` to continue.
- On the `Ready to go` page, click on `Finish`.
- Additional ethernet connections will repeatedly fail to connect. Open `nm-connnection-editor` to remove them.


## System76 driver install

- Ensure that DMI information is properly set at this point. If not, set it and reboot.
- Add the System76 PPA with the following command:
```
sudo add-apt-repository ppa:system76-dev/stable
```
- Install the System76 driver with the following command:
```
sudo apt-get install system76-driver
```
- Upgrade the system with the following commands. This may downgrade some packages as they pull the version from the System76 PPA:
```
sudo apt-get update
sudo apt-get dist-upgrade
```
- Reboot the system with `sudo reboot`.