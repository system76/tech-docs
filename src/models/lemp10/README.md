# Lemur Pro (lemp10)

- [External Overview](./external-overview.md)
- [Internal Overview](./internal-overview.md)
- [Parts & Repairs](./repairs.md)

![Lemur Pro](./img/lemp10.png)

The System76 Lemur Pro is a laptop with the following specifications:

- CPU
    - Supports Intel 11th Generation (Tiger Lake-U) CPUs
        - [Core i7-1165G7](https://ark.intel.com/content/www/us/en/ark/products/208921/intel-core-i7-1165g7-processor-12m-cache-up-to-4-70-ghz-with-ipu.html)
        - [Core i5-1135G7](https://ark.intel.com/content/www/us/en/ark/products/208922/intel-core-i5-1135g7-processor-8m-cache-up-to-4-20-ghz-with-ipu.html)
- BIOS
    - GD25B127D flash chip
        - SOIC-8 form factor
    - Programmed with [System76 Open Firmware](https://github.com/system76/firmware-open)
- EC
    - ITE IT5570E
    - Programmed with [System76 EC](https://github.com/system76/ec)
- Graphics
    - GPU: Intel Iris Xe Graphics
        - GOP driver is recommended, VBT is provided
    - eDP display: 14.0" 1920x1080@60Hz LCD
        - LCD panel: Innolux N140HCE-EN2 (or equivalent)
    - External video outputs:
        - 1x HDMI 2.0b
        - 1x DisplayPort 1.4 over USB-C
- Memory
    - Channel 0: 8-GB on-board DDR4
        - 4x [Samsung K4AAG165WA-BCWE](https://www.samsung.com/semiconductor/dram/ddr4/K4AAG165WA-BCWE/) (2GB each)
    - Channel 1: 8-GB/16-GB/32-GB DDR4 SO-DIMM @ 3200 MHz
- Networking
    - M.2 PCIe/CNVi WiFi/Bluetooth
        - Intel Wi-Fi 6 AX200/AX201
- Power
    - 19V, 3.42A (65W) DC-in port
        - Barrel size: 5.5mm (outer), 2.5mm (inner)
    - Included AC adapter: AcBel ADA012
        - AC power cord type: IEC C7 (non-polarized)
    - USB-C charging compatible with 65W+ charger
    - 73Wh 4-cell Lithium-Ion battery
    - [TI BQ24780S Battery Charger](https://www.ti.com/product/BQ24780S)
- Sound
    - Realtek ALC293D
    - Internal speakers & microphone
    - 3.5mm headphone/microphone combo jack
    - HDMI, USB-C DisplayPort audio
- Storage
    - M.2 (PCIe NVMe Gen 4) SSD-1
    - M.2 (PCIe NVMe Gen 3 or SATA) SSD-2
    - MicroSD card reader (RTS5227S)
- USB
    - 1x USB Type-C with Thunderbolt 4
    - 1x USB 3.1 (3.1 Gen 2) Type-A
    - 1x USB 3.0 (3.2 Gen 1) Type-A
- Webcam
    - 1280x720 CCD camera
