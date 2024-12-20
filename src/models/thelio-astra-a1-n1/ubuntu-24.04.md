# Thelio Astra (Ubuntu 24.04 LTS Setup)

Thelio Astra is unique in using an Ampere processor supporting aarch64 versions of Linux. The Ubuntu 24.04 LTS operating system is currently supported on this hardware after performing custom software setup tasks.

## Operating System download

- Download the Ubuntu Desktop for ARM 24.04.1 LTS ISO from [this link](https://cdimage.ubuntu.com/noble/daily-live/20240827/noble-desktop-arm64.iso).
- Verify that `sha256sum noble-desktop-arm64.iso` has the following output:
```
839627cb19b70d8c4da64c789ecbdec6af14f0017d925ab086c9ad7e93f2c325  noble-desktop-arm64.iso
```

## Hardware preparation

- It is recommended that all 8 memory channels are filled for best CPU performance.
- When using lower core count CPUs, the first two PCIe x16 slots (closest to the CPU) will run at x8 speeds. Place x16 devices into the third slot for optimal performance.

## Operating System install

Install Ubuntu desktop, then run the following commands.
```
sudo apt-get update && sudo apt-get dist-upgrade
sudo add-apt-repository ppa:system76-dev/stable
sudo apt-get install system76-driver-nvidia
reboot
```
