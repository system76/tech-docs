# nebula19 (Parts & Assembly)

The nebula19 chassis is ready to be outfitted with standard personal computer components. If the system has already been built, ensure the system is powered off and all cables are unplugged from the motherboard, PCIe cards, power supply, and front I/O before opening the chassis.

The preinstalled velcro strips are left partially unwrapped to aid in removal. When building the system, you can optionally wrap the velcro up the rest of the way.

- [Replacing the front accent strip](#replacing-the-front-accent-strip)
- [Removing the top case](#removing-the-top-case)
- [Removing the CPU shroud](#removing-the-cpu-shroud)
- [Unpacking the included accessories](#unpacking-the-included-accessories)
- [Installing/removing the side fan bracket](#installingremoving-the-side-fan-bracket)
- [Installing the motherboard](#installing-the-motherboard)
- [Installing the CPU shroud fans](#installing-the-cpu-shroud-fans)
- [Installing the GPU](#installing-the-gpu)
- [Installing the SATA backplane](#installing-the-sata-backplane)
- [Installing 2.5" drives](#installing-25-drives)
- [Installing the bottom case fan](#installing-the-bottom-case-fan)
- [Installing side intake fan](#installing-side-intake-fan)
- [Installing the power supply](#installing-the-power-supply)
- [Wiring the front I/O and power button](#wiring-the-front-io-and-power-button)

## Replacing the front accent strip:

nebula19 includes a customizable accent panel on the front of the case, which can be swapped to change the case's look and feel. The instructions for swapping the accent are also available in [video form](https://system76.com/r/diyaccentpanel).

- **Tools required:** None  

### Steps to replace the front accent strip:

1. Place the nebula19 on the edge of the desk so the front side is hanging off of the desk.
    - The nebula19 can alternatively be lifted or tilted so the front of the computer is hovering above the desk.
2. Slide the accent strip down to unlock it.
    - The accent can be gripped at the bottom edge.
3. Pull the accent strip off of the case, starting with the bottom edge.
4. Place the new accent strip onto the front of the case and slide it up to lock it into place.

![Front accent strip removal](./img/accent-strip-removal.webp)

## Removing the top case:

The top case can be removed to access the internal components.

- **Tools required:** Cross-head (Phillips) screwdriver (optional)  

### Steps to remove the top case:

1. Remove the four outer screws holding the top case onto the machine.

![Top case screws](./img/top-case-screws.webp)

2. Slide the top case up and off of the machine.

## Removing the CPU shroud:

The CPU shroud supports one or more of the CPU fans and guides airflow from the side of the case through the CPU radiator to the back exhaust vent. The CPU shroud is custom-designed to work with the Noctua `NH-U9S` CPU cooler that's optionally included with nebula19.

![CPU shroud](./img/cpu-shroud.webp)

- **Tools required:** Cross-head (Phillips) screwdriver  

### Steps to remove the CPU shroud:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unscrew the two side screws holding the CPU shroud onto the top crossbar.

![CPU shroud top crossbar screws](./img/cpu-shroud-screws-crossbar.webp)

3. Unscrew the four back screws holding the CPU shroud onto the chassis.
    - Hold onto the shroud while removing the final screw so it doesn't fall.

![CPU shroud back screws](./img/cpu-shroud-screws-back.webp)

4. Pull the CPU shroud out of the chassis.
5. When replacing the CPU shroud, ensure all fan cables are plugged into the fan splitter board in the top right of the chassis.

## Unpacking the included accessories:

nebula19 includes the following components preinstalled:

- 1x `nebula_io` power button controller board
- 1x `MYS7523` top I/O board
- 2x four-pin fan splitter boards
- 1x back CPU shroud fan
    - Be Quiet! Pure Wings 2 92mm (`BQ PUW2-9225-MR-PWM`)
- 2x short velcro straps
    - 1x on the side of the chassis
    - 1x on the side fan bracket

In addition, nebula19 ships with the following non-installed accessories:

- 1x Screw and velcro box
    - 8x short velcro straps
    - 1x long velcro strap
    - 4x motherboard standoffs
    - 4x M3 (motherboard) screws
    - 4x fan screws
- 1x Bottom case fan
    - Be Quiet! Silent Wings 4 140mm (`BQ SIW4-14025-LF-PWM`)
- 1x CPU cooler w/ fan (optional)
    - Noctua `NH-U9S` cooler w/ `NF-A9 PWM` fan
- 1x Side bracket fan (optional)
    - Be Quiet! Silent Wings 4 120mm (`BQ SIW4-12025-MF-PWM`)

### Steps to unpack the included accessories:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the CPU shroud](#removing-the-cpu-shroud).
2. Remove the accessory boxes from the chassis.

![Accessory boxes](./img/accessory-boxes.webp)

3. Open the accessory boxes as needed.

## Installing/removing the side fan bracket:

The side fan bracket provides a mounting point for an extra intake fan, such as the optional `BQ SIW4-12025-MF-PWM`.

If no optional accessories were ordered with the nebula19, then the side fan bracket will ship preinstalled. If optional accessories were included in the order, then they will ship inside of the chassis, and the side fan bracket will ship in a separate box. It can be installed after assembling the rest of the computer.

![Side fan bracket](./img/gpu-brace.webp)

The fan splitter on the side fan bracket can be used for the side intake fan installed on the side fan bracket as well as the bottom chassis intake fan.

- **Tools required:** Cross-head (Phillips) screwdriver  

### Steps to unpack and install the side fan bracket:

1. [Remove the top case](#removing-the-top-case) and [unpack the included accessories](#unpacking-the-included-accessories).
2. Cut the tape of the side fan bracket box and remove the side fan bracket and screw bag from the box.

![Side fan bracket unboxing](./img/gpu-brace-unboxing.webp)

3. Screw the side fan bracket into the system using the four M3 screws included with the side fan bracket.
    - The fan splitter board should be on the right side (with the dual headers facing outwards) and the rockets should point upwards.

![Side fan bracket screws](./img/gpu-brace-screws.webp)

### Steps to remove the side fan bracket:

1. [Remove the top case](#removing-the-top-case).
2. Unscrew the four screws holding the side fan bracket in place (two on the front of the case, two on the back.)

![side fan bracket screws](./img/gpu-brace-screws.webp)

3. Pull the side fan bracket out of the chassis.

## Installing the motherboard:

nebula19 supports the following standard motherboard sizes:

- Mini-DTX
- Mini-ITX

Four standoffs and motherboard screws are included.

- **Tools required:** Cross-head (Phillips) screwdriver  

### Steps to install the motherboard:

1. If they are installed, [remove the top case](#removing-the-top-case), [remove the CPU shroud](#removing-the-cpu-shroud) and [remove the side fan bracket](#installingremoving-the-side-fan-bracket).
2. Locate the standoffs and M3 screws from the brown screw and velcro box.

![Standoffs and M3 screws](./img/standoffs-screws.webp)

3. Insert the four standoffs into the holes in the chassis.

![Standoff holes](./img/standoff-holes.webp)

4. Install the motherboard's I/O shield onto the back of the chassis by pressing it into place from the inside.
5. Place the motherboard into the chassis, aligning the motherboard's screw holes with the installed standoffs.
6. Screw the motherboard into the standoffs using the M3 screws.

## Installing the CPU shroud fans:

nebula19 ships with one 92mm fan (`BQ PUW2-9225-MR-PWM`) installed in the back of the CPU shroud. If you install a CPU cooler with its own 92mm fan, such as the optional Noctua `NH-U9S` cooler sold with nebula19 (which includes a Noctua `NF-A9 PWM` fan), then the CPU cooler's fan can be mounted in the front of the CPU shroud.

These instructions use the Noctua `NH-U9S` as an example.

- **Tools required:** Cross-head (Phillips) screwdriver  

### Steps to install the CPU cooler fan (front):

1. Remove the [top case](#removing-the-top-case) and the [CPU shroud](#removing-the-cpu-shroud).
2. Remove the fan screws from the brown screw and velcro box.

![Fan screws](./img/accessory-fan-screws.webp)

3. Remove the `NH-U9S` from the box.

![Noctua NH-U9S unboxing](./img/cpu-cooler-unboxing.webp)

4. Remove the included `NF-F12` fan from the cooler heatsink by pulling the metal tabs (highlighted green above) off of the heatsink and fan.
5. Install the cooler onto the motherboard/processor.
6. Remove the front fan bracket from the CPU shroud by unscrewing the four screws (highlighted green below) and pulling it out of the CPU shroud.

![CPU shroud front fan bracket](./img/cpu-shroud-fan-bracket-front.webp)

7. Place the spinning side of the down up and the stationary cover up, then orient the fan so the wire points towards the top left (and the fan cover's logo sticker is upside-down).
    - The wire can be oriented in other directions if desired for cable management purposes, as long as the wire is able to reach the fan splitter board after the fan is installed.
8. Place the fan bracket over the fan so the thinnest side is on the right.
9. Screw in the four fan screws.
    - It may take some force to thread the fan screws into the fan's plastic frame.

![CPU shroud fan installation](./img/cpu-shroud-fan-installation.webp)

10. Place the CPU shroud fan and bracket into the CPU shroud, with the thinnest side of the bracket pointed into the shroud.
    - The spinning side of the fan should face the front of the chassis, while the stationary cover should face the back of the chassis.
11. Replace the screws holding the fan bracket onto the CPU shroud.
    - The front and back brackets face in opposite directions from each other.

### Steps to replace the preinstalled CPU shroud fan (back):

1. Remove the [top case](#removing-the-top-case) and the [CPU shroud](#removing-the-cpu-shroud).
2. Remove the back fan bracket from the CPU shroud by unscrewing the four screws (highlighted yellow below) and pulling it out of the CPU shroud.

![CPU shroud back fan bracket](./img/cpu-shroud-fan-bracket-back.webp)

3. Unscrew the four fan screws holding the fan onto the bracket.

![CPU shroud rear exhaust fan](./img/cpu-shroud-rear-fan-screws.webp)

4. When reinstalling the fan, the stationary cover should face the back of the chassis, and the wire should face the upper interior corner of the chassis (with the fan cover's logo upside-down). The thinnest side of the bracket should face directly into the shroud.
    - The wire can be oriented in other directions if desired for cable management purposes, as long as the wire is able to reach the fan splitter board after the fan and CPU cooler heatsink are installed.

## Installing the GPU:

nebula19 supports GPUs up to 278.175mm long. For optimal cooling and ease of installation, GPUs longer than 268.175mm are not recommended.

These instructions also apply to other PCI Express cards, such as add-in sound cards or networking cards.

- **Tools required:** Cross-head (Phillips) screwdriver  

### Steps to install the GPU:

1. If not already installed, [install the motherboard](#installing-the-motherboard).
    - If the motherboard is already installed and the system is assembled, then [remove the top case](#removing-the-top-case) and [remove the side fan bracket](#installingremoving-the-side-fan-bracket).
2. Unscrew the two screws holding the PCIe bracket onto the chassis, then remove the bracket.

![PCIe Bracket](./img/pcie-bracket.webp)

3. Remove a PCIe slot cover for each slot the new GPU will take up.
    - Additional slot covers may fall off after removing the PCIe brakcet; hold them up when replacing the bracket.
4. Install the GPU into the motherboard.
5. Replace the PCIe bracket, which will hold the end of the GPU in place.

## Installing the SATA backplane:

nebula19 is designed to work with an optional SATA backplane to allow for easy hot-swapping of 2.5" storage drives. The SATA backplane can be seen below.

![2.5" SATA backplane](./img/sata-backplane.webp)

- **Tools required:** Cross-head (Phillips) screwdriver  

### Steps to install the SATA backplane:

1. [Remove the top case](#removing-the-top-case).
    - The [side fan bracket](#installingremoving-the-side-fan-bracket) can also be removed for easier access to the SATA backplane screws and wiring.
2. Unscrew and remove the 2.5" drive cage's cover.

![2.5" SATA drive cage cover](./img/25-drive-cover.webp)

3. If the SATA backplane's screw holes are covered by a translucent film, remove the film.
4. Place the SATA backplane into the 2.5" drive cage, with the `SATA0` label facing the front of the chassis.

![SATA Backplane, Unscrewed](./img/sata-backplane-unscrewed.webp)

5. Screw the backplane into the drive cage from the bottom using the four included M3 screws.
    - Remember to turn the screwdriver counterclockwise instead of clockwise if you're looking at the screws from the top. Alternatively, the system can be placed on its side for easier access to the screw holes.

![2.5" SATA backplane screws](./img/sata-backplane-screws.webp)

6. Connect the white `POWER0` header on the back of the SATA backplane to the power supply, and the black `DATA0` and `DATA1` ports to two of the motherboard's SATA ports.
    - The `POWER0` header uses a four-pin Berg connector, also known as a floppy drive power connector.
7. [Install any 2.5" SATA drives](#installing-25-drives) and replace the drive cage cover, side fan bracket (if necessary), and top case.

## Installing 2.5" drives:

The drive cage can hold two 2.5" drives. Drives of 7.5mm, 9mm, or 15mm are supported. Airflow will decrease below recommended levels with drives larger than 15mm.

- **Tools required:** Cross-head (Phillips) screwdriver  

### Steps to install 2.5" drives:

1. [Remove the top case](#removing-the-top-case).
2. Unscrew and remove the 2.5" drive cage's cover.

![2.5" SATA drive cage & screws](./img/25-drive-installation.webp)

3. Remove the plastic ring from the top crossbar and slide out four screws for each drive being installed.
4. Insert two screws into each side of the 2.5" drive, then slide the drive into the drive cage, aligning the rubber mounts on the screws around the metal of the drive cage.
    - The larger portion of the SATA connector (the power section) should be at the top, while the smaller portion (the data section) should be at the bottom.
5. If the [optional SATA backplane](#installing-the-sata-backplane) is not present, connect the SATA data and power cables from the bottom of the drive cage.
    - A cutout in the chassis allows easy access to the bottom of the drive cage.

## Installing the bottom case fan:

The case includes a 140mm Be Quiet! Silent Wings 4 `BQ SIW4-14025-LF-PWM` fan (not installed by default).

- **Tools required:** Cross-head (Phillips) screwdriver  

### Steps to replace the bottom case fan:

1. [Remove the top case](#removing-the-top-case) and [remove the side fan bracket](#installingremoving-the-side-fan-bracket).
2. Remove the fan, dust filter, and fan screws from the 140mm fan box.

![Bottom fan unboxing](./img/bottom-fan-unboxing.webp)

3. Set the machine down on its side.
4. Line the components up over the fan screw holes.
    - The dust filter should have the shiny side facing the chassis.
    - The fan should have the stationary cover facing upwards and the wire facing the front-interior corner of the machine.
        - The wire can be passed through a cable management hole in the front-interior corner of the machine.
5. Screw in the bottom fan from the bottom of the chassis.

![Bottom fan screws](./img/bottom-fan-screws.webp)

## Installing side intake fan:

nebula19 supports one 120mm side intake fan mounted to the side fan bracket. A 120mm Be Quiet! Silent Wings 4 fan (`BQ SIW4-12025-MF-PWM`) is available as an optional add-on at the time of purchase.

### Steps to install the side intake fan:

1. [Remove the top case](#removing-the-top-case) and [remove the side fan bracket](#installingremoving-the-side-fan-bracket).
2. Unpack the fan, dust filter, and fan screws from the fan box.

![Be Quiet! Silent Wings 4 120mm Box](./img/side-fan-unboxing.webp)

3. Place the dust filter and fan in the desired position along the side fan bracket.
    - The shiny side of the dust filter should face the side fan bracket.
    - The spinning side of the fan should face outward, while the stationary label should face inward.
    - The fan wire should be oriented towards the fan splitter board on the side fan bracket.
4. From the back, screw the fan screws through the side fan bracket and into the fan.
5. Plug the side fan into one of the headers on the side fan bracket's fan splitter board. The nearby velcro strap can be used to hold the fan's cable.

![Mounted side fan](./img/side-fan-mounted.webp)

6. Replace the side fan bracket and top case.

## Installing the power supply:

The system supports standard ATX power supplies. nebula19 includes a [dust filter](#steps-to-replace-the-power-supply-dust-filter) installed over the power supply's fan vent.

- **Tools required:** Cross-head (Phillips) screwdriver  

### Steps to install the power supply:

1. [Remove the top case](#removing-the-top-case) and [remove the side fan bracket](#installingremoving-the-side-fan-bracket).
2. Place the power supply into the chassis with the fan facing down.
3. While holding the power supply against the back of the chassis, screw in the four power supply screws.
    - Power supply screws are typically included with the power supply, and are not included with nebula19.

![Power supply screw holes](./img/psu-screws.webp)

### Steps to replace the power supply dust filter:

1. [Remove the top case](#removing-the-top-case) and [remove the power supply](#steps-to-install-the-power-supply).
2. Unscrew the four screws holding the dust filter onto the chassis.

![Power supply dust filter screws](./img/psu-dust-filter.webp)

3. Remove, clean, and replace the dust filter.

## Wiring the front I/O and power button:

nebula19 comes standard with two front daughterboards:

- The `nebula-io_2.2` power button controller.
- The `MYS7523 Rev. 2.0` front I/O board.

The Nebula Io board can be used to power the system on when the top case is removed.

Both daughterboards can be removed and replaced if necessary. The external power button attached to the top case can also be replaced.

- **Tools required:** Cross-head (Phillips) screwdriver  

### Steps to wire the front I/O and power button:

1. [Remove the top case](#removing-the-top-case).
2. Refer to the below diagram for powering the machine on or removing and replacing either daughterboard:
    - The front I/O board screws are highlighted in green.
    - The power button controller board screws are highlighted in red.
    - The internal power button is highlighted in cyan.

![Front daughterboard screws](./img/front-daughterboard-screws.webp)

3. Refer to the below diagram for wiring the front I/O and power button (the CPU shroud and top crossbar have been removed for easier visibility):
    - The USB Type-C port cable (highlighted green) connects to the motherboard's USB 3.1 header.
    - The audio cable (highlighted yellow) connects to the motherboard's analog audio header.
    - The USB Type-A port cable (highlighted cyan) connects to the motherboard's USB 3.0 header.
    - The Nebula Io `PMB1` header (highlighted red) connects to the motherboard's power button header.
        - The red wire should be on the right.
    - The Nebula Io `PFP1` header (highlighted pink) connects to the power button receptacle.
        - The red wire should be on the right.
    - The power button receptacle header (highlighted orange) connects to the Nebula Io board.
        - The red wire should be on the left.

![Front daughterboard connectors](./img/front-daughterboard-connectors.webp)

### Steps to replace the power button:

1. [Remove the top case](#removing-the-top-case).
2. Follow the instructions in the [Replace the Thelio Power Button](https://support.system76.com/articles/thelio-power-button/) support article.
