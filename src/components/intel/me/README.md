# Intel Management Engine (ME)

The Intel Management Engine is integrated into the
[Intel Platform Controller Hub (PCH)](../pch/README.md). It participates in the
CPU and PCH boot process, and has runtime components to implement functionality
that is not implemented in CPU firmware, such as firmware TPM (fTPM).

**Documentation**

Documentation is difficult to find. Incomplete information about the Intel ME
can be found [on Wikipedia](https://en.wikipedia.org/wiki/Intel_Management_Engine).
Sometimes confidential information is found on the
[Intel Resource and Design Center](https://www.intel.com/content/www/us/en/design/resource-design-center.html),
especially where the firmware has to communicate with the Intel ME in order to
boot the system.

**Releases**

Intel ME versions follow a format of `GENERATION.SKU.HOTFIX.BUILD`. Releases
are done at the [Intel Validation Internet Portal](https://platformsw.intel.com/).
It is up to the motherboard manufacturer to configure the Intel ME using the
Intel Flash Image Tool (FIT), which produces a distributable firmware image. It
is not permitted to distribute the Intel FIT to the end user. System76 closely
monitors for Intel ME releases and updates our firmware images as necessary.

**Neutralization**

The Intel ME poses potential security security risks due to its access to the
system and an inability for users, even including motherboard and firmware
vendors, to audit the source code of the Intel ME firmware. Disabling all
functionality of the Intel ME is not possible. Methods for disabling runtime
components vary between versions. System76 Open Firmware disables runtime
components of the Intel ME using the most capable method possible.
