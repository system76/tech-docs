# Lemur Pro (lemp9)

- [External Overview](./external-overview.md)
- [Internal Overview](./internal-overview.md)
- [Parts & Repairs](./repairs.md)

![Lemur Pro](./img/lemp9.png)

The System76 Lemur Pro is a laptop with the following specifications:

- CPU
    - Supports Intel Comet Lake-U CPUs
        - [Intel i7-10510U](https://ark.intel.com/content/www/us/en/ark/products/196449/intel-core-i7-10510u-processor-8m-cache-up-to-4-90-ghz.html)
        - [Intel i5-10210U](https://ark.intel.com/content/www/us/en/ark/products/195436/intel-core-i5-10210u-processor-6m-cache-up-to-4-10-ghz.html)
- BIOS
    - GD25B127D flash chip running [System76 Open Firmware](https://github.com/system76/firmware-open)
- EC
    - ITE IT5570E running [System76 EC](https://github.com/system76/ec)
    - Backlit Keyboard, with standard PS/2 keycodes and SCI hotkeys
    - Battery
    - Charger, using AC adapter or USB-C PD
    - Suspend/resume
    - Touchpad
- Graphics
    - GPU: Intel UHD Graphics 620
        - GOP driver is recommended, VBT is provided
    - eDP display: 14.0" 1920x1080@60Hz LCD
        - LCD panel: Innolux N140HCA-EAC (or equivalent)
    - External video outputs:
        - 1x HDMI 1.4a
        - 1x DisplayPort 1.2 over USB-C
- Memory
    - Channel 0: 8-GB on-board DDR4 [Samsung K4AAG165WA-BCTD](https://www.samsung.com/semiconductor/dram/ddr4/K4AAG165WA-BCTD/)
    - Channel 1: 8-GB/16-GB/32-GB DDR4 SO-DIMM
- Networking
    - M.2 PCIe/CNVi WiFi/Bluetooth
- Power
    - 19V, 3.42A (65W) AC adapter
      - Included AC adapter: AcBel ADA012
        - AC power cord type: IEC C7 (non-polarized)
      - Barrel size: 5.5mm (outer), 2.5mm (inner)
    - 73Wh battery
    - [TI BQ24780S Battery Charger](https://www.ti.com/product/BQ24780S)
- Sound
    - Realtek ALC293D
    - Internal speaker
    - Internal microphone
    - Combined headphone/microphone 3.5-mm jack
    - HDMI audio
    - USB-C DisplayPort audio
- Storage
    - M.2 PCIe/SATA SSD-1
    - M.2 PCIe/SATA SSD-2
    - RTS5227S MicroSD card reader
- USB
    - 1280x720 CCD camera
    - USB 3.1 Gen 2 Type-C (left)
        - [ANX7411 USB-C Port Controller](https://www.analogix.com/en/products/usb-c-port-controller/anx7411)
        - [ANX7440 USB 3.1/DisplayPort Mux](https://www.analogix.com/en/products/re-timersrepeaters/anx7440)
    - USB 3.1 Gen 2 Type-A (left)
    - USB 3.1 Gen 1 Type-A (right)
