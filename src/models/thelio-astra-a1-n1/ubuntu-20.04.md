# Thelio Astra (Ubuntu 20.04 LTS Setup)

Thelio Astra uses an Ampere processor supporting AArch64 (ARM64) versions of Linux. If you need to reinstall the operating system, the instructions on this page can be used to set up Ubuntu 20.04 LTS.

## Operating system download:

1. Download the [Ubuntu Server for ARM 20.04.5 LTS ISO](https://cdimage.ubuntu.com/releases/20.04/release/ubuntu-20.04.5-live-server-arm64.iso).
2. Verify that the SHA256SUM matches the following:
    ```
    e42d6373dd39173094af5c26cbf2497770426f42049f8b9ea3e60ce35bebdedf
    ```
    - You can run `sha256sum ubuntu-20.04.5-live-server-arm64.iso` to check the SHA256SUM from the terminal, or use a GUI application such as Popsicle.

## Hardware preparation:

- It's recommended to fill all 8 memory channels for maximum CPU performance.
- When using Ampere Altra (non-Max) CPUs, the top two PCIe x16 slots (closest to the CPU) will run at x8 speeds. Place x16 devices into the bottom two slots for optimal performance.
- Install all required hardware, including GPUs and WiFi cards, before installing the OS.
- The system firmware version must be `3.02` or above in order to support early boot output on NVIDIA GPUs.
- There is a jumper labeled `BMC disable` that can bypass the requirement that the BMC boots before the power button is functional.
    - Because the BMC may be necessary to complete the initial setup, use of this jumper is not recommended until initial setup is complete.
    - Bridging the second and third pins disables the BMC. The default behavior (enabling the BMC) is the same as if the first and second pins are bridged.

## Firmware preparation:

1. Plug the last ethernet port (closest to the PCIe slots) into to a DHCP-capable network where you already have another computer connected.
    - This is the BMC's ethernet port, which will enable remote server management.
2. Power on the system. Press the `F2` key when the firmware splash screen appears to enter the firmware setup menu. 
3. Navigate to the `Advanced` tab, then select the `Network Stack Configuration` item. Switch `Network Stack` to `Disabled`. This will reduce boot times by disabling network booting, which will not be used in this guide.
4. Navigate to the `Server Mgmt` tab, then select the `BMC Network Configuration` item. Note the `Station IP address`, which is how you will connect to the BMC's web interface later.
5. Navigate to the `Exit` tab and choose `Save Changes and Exit`. When prompted, select yes.
6. After the system reboots, power it off to prepare for the next task.

## BMC interface preparation:

1. Open a web browser on another computer that is on the same network as the BMC. Navigate to the URL `https://AAA.BBB.CCC.DDD`, replacing `AAA.BBB.CCC.DDD` with the station IP address recorded before. 
2. A login screen should appear. The default username is `root` and the default password is `0penBmc`.
    - The default password starts with a zero `0`, not the letter `O`.
3. Under the `Operations` menu, select the `Virtual media` item. Click on `Add file`, and in the `File Upload` dialog, choose the `ubuntu-20.04.5-live-server-arm64.iso` file that you downloaded and verified before. Click on `Start`; a notification should briefly appear in the top right corner indicating success.
4. Under the `Operations` menu, select the `SOL console` item. This will show the system's serial output, which allows viewing Linux kernel output if it does not show up on the connected display.

## Operating system installation:

1. Plug the second to last ethernet port (above the BMC's ethernet port) into a DHCP-capable network with internet access.
2. Power on the system. Press the `F11` key when the firmware splash screen appears to open the boot menu.
3. In the boot menu, select the option that starts with `UEFI OS (Linux File-Stor Gadget`.
4. Navigate to the `Boot and Install with the HWE kernel` option and press `e` to edit it.
5. Move the cursor to the line starting with `linux`. In between `/casper/hwe-vmlinuz` and `---`, replace `quiet splash` with `console=tty0 nomodeset fsck.mode=skip`, ensuring that there are spaces before and after these added arguments. Press `F10` to boot.
    - The first added argument, `console=tty0`, tries to get Linux console output to show up on a connected display.
    - The second added argument, `nomodeset`, works around potential nouveau driver crashes when NVIDIA graphics cards are used.
    - The third added argument, `fsck.mode=skip`, will skip filesystem checks, which can take a long time.
6. It will take some time to boot to the installer. If no output is seen, check the `Serial over LAN (SOL) console` page in the BMC web interface.
7. Select the desired language.
8. If you are prompted to apply an installer update, choose `Continue without updating`.
9. On the `Keyboard configuration` page, select the desired keyboard layout and variant. Select `Done` to continue.
10. On the `Network configuration` page, you should have a successfully connected ethernet port. Select `Done` to continue.
11. On the `Proxy configuration` page, enter any required proxy (this should almost always be left blank). Select `Done` to continue.
12. On the `Ubuntu archive mirror configuration` page, the default mirror for packages will be tested. When it completes, select `Done` to continue.
13. On the `Guided storage configuration` page, select `Use an entire disk`, and choose the desired disk. Leave the `Set up this disk as an LVM group` option enabled. Select `Done` to continue.
14. On the `Storage configuration` page, you can review the disk configuration. Select `Done` to continue. A warning will be shown; select `Continue`.
15. On the `Profile setup` page, enter the following information (or substitute your own information):
    - `Your name:` `System76`
    - `Your servers name:` `system76-pc`
    - `Pick a username:` `system76`
    - `Choose a password:` `system76`
    - `Confirm your password:` `system76`
16. On the `SSH setup` page, leave `Install OpenSSH server` unselected. Select `Done` to continue.
17. On the `Third-party drivers` page, leave any aptions unselected. Select `Continue` to continue.
18. On the `Featured Server Snaps` page, leave all options unselected. Select `Done` to continue.
19. On the `Installing system` page, installation progress will be shown. This may take some time to finish. When it is complete, select `Reboot Now`.
20. You may be prompted to remove the installation medium. Navigate in the BMC web interface to the `Operations` menu and `Virtual media` page. Click on the `Stop` button. A notification should briefly appear in the top right corner indicating success. Press Enter on the system to reboot.

## Desktop environment installation:

1. The system will boot to a terminal login prompt. Log in with `system76` as the username and `system76` as the password (or your own credentials).
    - You may need to log in with the BMC serial console if the physical display does not show a prompt.
2. Upgrade the system with the following commands:
    ```
    sudo apt update
    sudo apt full-upgrade
    ```
3. Install the NVIDIA driver with the following command. The 550 driver is currently only packaged with the server variant for 20.04.
    ```
    sudo apt install nvidia-driver-550-server
    ```
4. Install the default Ubuntu desktop environment with the following command. This will download a lot of packages and take a while to install:
    ```
    sudo apt install ubuntu-desktop
    ```
5. At this point, NetworkManager will be installed alongside systemd-networkd, which causes boot delays as they both wait for network completion. The following steps will disable systemd-networkd in favor of NetworkManager, which has better integration with the Ubuntu desktop.
    - A. Disable and mask systemd-networkd services with the following commands:
        ```
        sudo systemctl disable systemd-networkd.service systemd-networkd.socket
        sudo systemctl mask systemd-networkd.service systemd-networkd.socket
        ```
    - B. Edit the netplan configuration with `sudo nano /etc/netplan/00-installer-config.yaml` and replace all of the contents with the following:
        ```
        network:
          version: 2
          renderer: NetworkManager
        ```
    - C. Regenerate the netplan configuration by running the following command:
        ```
        sudo netplan generate
        ```
6. Reboot by running `sudo reboot`.
7. You should see a login screen, where you can log in to the `System76` user with the password `system76` (or log into your own account).
    - If you don't see a login screen, try a different display connection type (e.g. DisplayPort instead of HDMI) and/or a different display.
8. After logging in, initial setup will appear.
    - A.  On the `Online Acconts` page, click `Skip` to continue.
    - B. On the `Livepatch` page, click `Next` to continue.
    - C. On the `Help improve Ubuntu` page, select `No, don't send system info`, then click `Next` to continue.
    - D. On the `Privacy` page, leave `Location Services` unselected. Click `Next` to continue.
    - E. On the `Ready to go` page, click `Done`.
9. Default additional ethernet connections will repeatedly fail to connect. Run `nm-connnection-editor` to open the connection manager and remove them.

## System76 Driver installation:

1. Ensure that DMI information is properly set at this point. If not, set it and reboot.
    - If you are reinstalling your OS and have not re-flashed your firmware from a non-System76 source, then the DMI information should already be set correctly.
2. Add the System76 PPA with the following command:
    ```
    sudo add-apt-repository ppa:system76-dev/stable
    ```
3. Install the System76 Driver with the following command:
    ```
    sudo apt install system76-driver
    ```
4. Upgrade the system with the following commands. This may downgrade some packages as they pull the versions from the System76 PPA:
    ```
    sudo apt update
    sudo apt full-upgrade
    ```
5. Reboot the system with the `reboot` command.