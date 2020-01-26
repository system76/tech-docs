# Intel Comet Lake-U (CML-U) CPU

The Intel Comet Lake-U CPU is designed for mobile devices and includes an
integrated PCH, the [Intel 400 series chipset](../../pch/400-lp/README.md).

The available SKUs may be seen at the [Intel ARK](https://ark.intel.com/content/www/us/en/ark/products/codename/90354/comet-lake.html).

## Firmware Support

Support for the CML-U CPU is provided by the following:

- [coreboot soc/cannonlake](https://review.coreboot.org/cgit/coreboot.git/tree/src/soc/intel/cannonlake)
    - Configured by mainboard source code and build configuration
    - Correct mainboard source code and build configuration is provided with System76 firmware
- [Intel Firmware Support Package (FSP) CometLakeFspBinPkg/CometLake1](https://github.com/IntelFsp/FSP/tree/master/CometLakeFspBinPkg/CometLake1)
    - Configured using Updateable Product Data (UPD)
    - UPDs are set by coreboot based on mainboard source code and build configuration
    - Correct mainboard source code and build configuration is provided with System76 firmware
- Intel Graphics Output Protocol (GOP) 9.0 - Optional
    - Configured using the Video BIOS Table (VBT)
    - VBT is edited using Intel Binary Modification Program (BMP)
    - Sample VBT is available from Intel FSP repository
    - Correct VBT is provided with System76 firmware
- Intel Management Engine (ME) 14.0
    - Configured using the Intel Firmware Descriptor (FD) as well as ME filesystem
    - Intel FD and ME filesystem is edited by Intel Flash Image Tool (FIT)
    - Correct Intel FD and ME is provided with System76 firmware
- Intel Microcode
    - Comet Lake U42 - 806EC
    - Comet Lake U64 - A0660
    - Correct microcode is provided with System76 firmware
- Model-specific configuration can be found in model documentation

## Documentation

Documentation for the CML-U CPU may be found at the [Intel Resource and Design Center](https://www.intel.com/content/www/us/en/design/resource-design-center.html).
Some documentation may require signing an NDA.
