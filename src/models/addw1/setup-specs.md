# Adder WS (UEFI Setup & Specifications)

When starting your Adder WS, it takes a few seconds to conduct a quick check of the components. As it proceeds, it will notify you if anything is wrong. Any issues that prevent the system from booting will be displayed and you will be prompted to enter the Setup. If no problems are detected, your Adder WS will load GRUB for Ubuntu or systemd-boot for Pop!_OS.

- **For Setup/BIOS, hold F2** while booting.
- **For boot options, hold F7** while booting and choose your preferred boot device.

## Updating the BIOS

BIOS/UEFI firmware updates and instructions are sent out as needed. The firmware manager will notify you if a firmware update is available for your Adder WS. You can also check for updates under Settings -> Devices -> Firmware in Pop!_OS, or using the Firmware Manager app in Ubuntu.

## BIOS overview

The BIOS/UEFI Setup utility allows you to make low-level changes to your Adder WS. It's not recommended to make changes unless the settings are provided by Support or you understand what you're changing.

### Setup Utility

- **SATA Port #:** Opens the sub-menu to show the configuration of a SATA device on the SATA ports.

- **OffBoard SATA/NVMe Controller Configuration:** Opens the sub-menu to show the configuration of any devices on the offboard SATA/NVMe controller, if installed.

- **System Date/Time:** Sets the system date/time using the hardware clock.

- **System/Extended Memory:** Displays information about the amount of RAM installed.

- **ME FW/MB Series/BIOS Version/KB/EC Firmware Rev:** Displays information about the BIOS version(s).

- **MAC Address:** Displays the network adapter's hardware address.

### Advanced

- **Advanced Chipset Control:** Options for FlexiCharger, GPU Performance Scaling, Intel Speed Shift Technology, VT-d, UEFI OS Fast Boot, Software Guard Extensions (SGX), ME State, HeadPhone PC Beep Sound Support.

  - **FlexiCharger:** Options to enable/disable FlexiCharger. FlexiCharger will not start charging the battery unless it is below the lower threshold, and will stop charging the battery at the upper threshold. Using FlexiCharger for extended periods of time will decrease the battery indicator's accuracy.
  
  - **GPU Performance Scaling:** NVIDIA GPU Performance Scaling Support. Disabling this may cause issues with booting.
  
  - **Intel Speed Shift Technology:** Enabling will expose the CPPCv2 interface to allow for hardware controlled P-states (power states.)
  
  - **VT-d:** Enable/disable Intel Virtualization Technology for Directed I/O. Extends Intel Virtualization Technology (VT) by providing hardware assets for virtual hypervisors.
  
  - **UEFI OS Fast Boot:** When enabled, the system firmware does not initialize the keyboard or check for the firmware menu key.
  
  - **Software Guard Extensions (SGX):** Enable or disable Intel SGX (Software Guard Extensions.)
  
  - **ME State:** Intel Management Engine. Recommended to Disable.
  
  - **Headphone PC Beep Sound Support:** If disabled, there will be no alarm beep sound at boot time though the headphones.

- **Thunderbolt<sup>(TM)</sup> Configuration:**

  - **Discrete Thunderbolt<sup>(TM)</sup> Support:** Enable or disable Thunderbolt<sup>(TM)</sup> Support.
  
  - **Security Level:** Security level selection for Thunderbolt<sup>(TM)</sup>.

- **OverClocking Performance Menu:** Memory overclocking options.

  - **Memory:** Select the DIMM timing profile. For 3000MHz memory, use the XMP1 profile.
  
- **SATA Mode:** The SATA (Seral ATA) controller is designed to operate in AHCI (Advanced Host Controller Interface) mode only.

- **Power on boot beep:** Enable/disable a beep as the computer starts up.

- **Battery low alarm beep:** Enable/disable a beep when the battery is critically low.

### Security

- **Set Supervisor Password:** Sets a password for the Setup Utility. This does not affect access to the computer or installed OS, only the BIOS/UEFI.

- **TPM Configuration:** Trusted Computing settings.

  - **Security Device Support:** Enables or disables BIOS support for the TPM 2.0 security device.
  
### Administer Secure Boot

- **Secure Boot:** Enables support for Secure Boot. This is not recommended or required for Ubuntu/Pop!_OS.

### Boot

- **EFI:** Sets the boot order and chooses which boot devices are enabled.

- **UEFI Setting:** Contains other settings regarding boot devices.

  - **Network Stack:** Enables or disables support for Intel PXE network boot.

  - **IPv4 PXE Support:** Allow PXE booting using IPv4.
    
  - **IPv6 PXE Support:** Allow PXE booting using IPv6.

## Specifications

- **Processors:**

  - **Intel® Core<sup>TM</sup> i7-9750H (4.1GHz):** 2.6 up to 4.50GHz - 12MB Cache – 6 Cores – 12 Threads
  
  - **Intel® Core<sup>TM</sup> i9-9980HK (4.1GHz):** 2.4 up to 5.0GHz - 16MB Cache – 8 Cores – 12 Threads
  
- **Display:** 15.6” 4K (3840x2160) OLED Glossy

- **Memory:**
  - Dual Channel DDR4
  - Two 260-pin SO-DIMM sockets
  - Supports DDR4 2666MHz memory modules (real operational frequency depends on the FSB of the processor.)
  - Memory expandable up to 64GB (compatible with 8GB/16GB/32GB modules.)

- **Graphics:** NVIDIA GeForce RTX 2070

- **Storage:**
  - Two M.2 SSD 2280 slots, supporting SATA and PCIe Gen3x4
  - One 2.5" 7mm SATA slot
  
- **Audio:**
  - High Definition audio interface
  - S/PDIF Digital output
  - Built-in Array Microphone
  - Two built-in speakers
  - SoundBlasterX® Pro-Gaming 360° DAC
  
- **Touchpad & Keyboard:**
  - ClickPad with multi-touch gesture and scrolling functionality
  - A4-size isolated keyboard
  
- **Webcam:** 720p HD Video Camera with USB interface

- **Interfaces:**
  - 1 HDMI (with HDCP)
  - 1 Mini DisplayPort 1.3
  - 1 DisplayPort 1.3 over USB 3.1 Gen 2 (Type-C)
  - 1 USB 3.1 Gen 2 / Thunderbolt<sup>TM</sup> 3 Port (Type-C)
  - 3 USB 3.0 Ports (Type A, 1x powered USB port, AC/DC)
  - 1 2-in-1 Audio Jack (Microphone + S/PDIF Optical output)
  - 1 2-in-1 Audio Jack (Headphone + Microphone)
  - 1 RJ-45 LAN (10/100/1000Mbps)
 
- **Card Reader:** Embedded Multi-in-1 Card Reader, supporting SD/Mini SD/SDHC/SDXC up to UHS-II/MMC/RS MMC.

- **M.2 Slots:**
  - **Slot 1:**​ for M.2 2230 WLAN combo module with PCIe & USB interfaces (A Key).
  - **Slot 2:** for SSD M.2 2280 card with SATA/PCIe Gen 3 x4 Interface (M Key).
  - **Slot 3:** for SSD M.2 2280 card with SATA/PCIe Gen 3 x4 Interface (M Key).
  
- **Network:**
  - Built-in 10/100/1000Mb Base-TX Ethernet LAN
  - Intel® Dual Band Wireless-AC 9560 (2*2 802.11 a/c) WLAN + Bluetooth M.2 2230 Combo Module (867Mbps)
  
- **Power and battery:**
  - Full Range AC/DC Adapter
  - AC input 100 - 240V, 50 - 60Hz,
  - DC Output 19.5V, 11.8A (230Watts)
  - Embedded smart Lithium-Ion battery pack (62WH)

- **Security:**
  - Security (Kensington® Type) Lock Slot
  - Disabled ME
  - BIOS/UEFI Password
  - Trusted Platform Module 2.0 (disabled by default)

- **Operating System:** Pop!_OS or Ubuntu

- **LED Indicators:** Power/Suspend, Battery, HDD, Airplane Mode, Camera

- **Environmental:**
  - Temperature:
    - Operating: 5°C - 35°C
    - Non-operating: -20°C - 60°C
  - Relative humidity:
    - Operating: 20% - 80%
    - Non-operating: 10% - 90%
    
- **Dimensions & Weight:**
  - Height x Width x Depth: 14.13" x 10.16 " x 1.18"
  - 5.51lbs, 2.50kg base weight, varies with configuration.
