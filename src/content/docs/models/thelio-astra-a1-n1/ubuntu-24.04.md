# Thelio Astra (Ubuntu 24.04 LTS Setup)

Thelio Astra uses an Ampere processor supporting AArch64 (ARM64) versions of Linux. If you need to reinstall the operating system, the instructions on this page can be used to set up Ubuntu 24.04 LTS.

## Operating system download:

1. Download the [Ubuntu Desktop for ARM 24.04.1 LTS daily ISO from 8/27/2024](https://apt.pop-os.org/iso/ubuntu-24.04-arm64-20240827.iso).
    - This was the latest daily ISO available for arm64 at the time this guide was last updated. Newer daily ISOs may work, but will have a different SHA256SUM in the next step.
2. Verify that the SHA256SUM matches the following:
    ```
    839627cb19b70d8c4da64c789ecbdec6af14f0017d925ab086c9ad7e93f2c325
    ```
    - You can run `sha256sum noble-desktop-arm64.iso` to check the SHA256SUM from the terminal, or use a GUI application such as Popsicle.
3. Write the ISO to a USB flash drive using an application such as [Popsicle](https://github.com/pop-os/popsicle/releases) or [Etcher](https://etcher.io).

## Hardware preparation:

- It's recommended to fill all 8 memory channels for maximum CPU performance.
- When using Ampere Altra (non-Max) CPUs, the top two PCIe x16 slots (closest to the CPU) will run at x8 speeds. Place x16 devices into the bottom two slots for optimal performance.
- Install all required hardware, including GPUs and WiFi cards, before installing the OS.
- The system firmware version must be `3.02` or above in order to support early boot output on NVIDIA GPUs.
- There is a jumper labeled `BMC_DIS` (BMC Disabled) that can bypass the requirement that the BMC boots before the power button is functional.
    - Bridging the second and third pins disables waiting for the BMC on boot. The default behavior (enabling the BMC) is the same as if the first and second pins are bridged.

## Operating system installation:

1. Power on the system. Press the `F11` key when the firmware splash screen appears to open the boot menu.
2. In the boot menu, select the option to boot the installation media (e.g. `UEFI OS (Linux File-Stor Gadget`).
3. Proceed through the graphical Ubuntu installation wizard.

## System76 Driver installation:

1. Ensure that DMI information is properly set at this point. If not, set it and reboot.
    - If you are reinstalling your OS and have not re-flashed your firmware from a non-System76 source, then the DMI information should already be set correctly.
2. Install all available operating system updates:
    ```
    sudo apt update
    sudo apt full-upgrade    
    ```
2. Add the System76 PPA with the following command:
    ```
    sudo add-apt-repository ppa:system76-dev/stable
    ```
3. Install the System76 driver.
    - If your Thelio Astra contains an NVIDIA GPU, use the following command, which includes a System76-packaged NVIDIA driver along with other drivers and utilities:
        ```
        sudo apt install system76-driver-nvidia
        ```
    - Otherwise, use the following command to only install non-NVIDIA-related drivers and utilities:
        ```
        sudo apt install system76-driver
        ```
4. Install all available OS updates again. This may downgrade some packages as they pull the version from the System76 PPA:
    ```
    sudo apt update
    sudo apt full-upgrade
    ```
5. Reboot the system with the GUI or with the `reboot` command.