# Thelio Mira (Parts & Repairs)

Many components in your Thelio Mira can be upgraded or replaced as necessary. This page uses photos of the the B4-N3 revision, which indicates:

- **B4:** The fourth Intel motherboard used in Thelio Mira.
- **N3:** Based on the third revision of the nebula40 chassis.
    - The nebula40 chassis succeeds the former nebula36 chassis.

Minor case details may vary based on the production date of the unit, but screw counts, general component locations, and other details should remain the same unless otherwise noted.

Power the machine off, switch off the power supply, and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Replacing the front accent strip](#replacing-the-front-accent-strip)
- [Removing the top case](#removing-the-top-case)
- [Adding/removing 2.5" storage drives](#addingremoving-25-storage-drives)
- [Removing the side brace](#removing-the-side-brace)
- [Replacing the bottom case fan](#replacing-the-bottom-case-fan)
- [Removing the CPU duct](#removing-the-cpu-duct)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing the GPU](#replacing-the-gpu)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the M.2 drives](#replacing-the-m2-drives)
- [Replacing the CPU fans](#replacing-the-cpu-fans)
- [Replacing the CPU cooler/thermal paste and CPU](#replacing-the-cpu-cooler-and-cpu)
- [Replacing the power supply](#replacing-the-power-supply)
- [Replacing the Thelio Io board](#replacing-the-thelio-io-board)
- [Replacing the SATA backplane](#replacing-the-sata-backplane)
- [Replacing the top I/O](#replacing-the-top-io)
- [Troubleshooting the power button](#troubleshooting-the-power-button)

## Replacing the front accent strip:

Thelio Mira includes a customizable accent panel on the front of the case, which can be swapped to change the case's look and feel. The instructions for swapping the accent are also available in [video form](https://system76.com/r/diyaccentpanel).

**Tools required:** None  
**Time estimate:** 30 seconds  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the front accent strip:

1. Place the Thelio on the edge of the desk so the front side is hanging off of the desk.
    - The Thelio can alternatively be lifted or tilted so the front of the computer is hovering above the desk.
2. Slide the accent strip down to unlock it.
    - The accent can be gripped at the bottom edge.
3. Pull the accent strip off of the case, starting with the bottom edge.
4. Place the new accent strip onto the front of the case and slide it up to lock it into place.
    - Due to manufacturing tolerances, the accent strip may not sit flush with the top case when fully installed.

![Front accent strip removal](./img/accent-strip-removal.webp)

## Removing the top case:

The top case can be removed to access the internal components.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 2 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the top case:

1. Remove the four outer screws holding the top case onto the machine.

![Top case screws](./img/top-case-screws.webp)

2. Slide the top case up and off of the machine.

## Adding/removing 2.5" storage drives:

Thelio Mira B4-N3 supports up to two 2.5" SATA III drives.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to add/remove 2.5" storage drives:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unscrew the two screws securing the drive bay's cover, highlighted green below.

![2.5" drive cover and 2.5" drive screws](./img/25-slot-cover.webp)

3. If you are adding a new drive, pop out the black plastic ring on the top crossbar and slide out four screws (per drive).

![2.5" drive cover and 2.5" drive screws](./img/25-drive-screws.webp)

4. Insert four screws into each 2.5" storage drive you wish to install.
5. Slide each 2.5" drive into one of the slots leading to the Thelio-IO board.

![2.5" drive installation](./img/25-drive-installation.webp)  

![Installed 2.5" drive](./img/25-drive-installed.webp)

6. Replace the black plastic screw ring and the 2.5" drive bay cover.

## Removing the side brace:

The side brace provides a mounting point for the GPU brace finger, which helps keep GPUs or other PCI Express cards in place during shipping. It also provides mounting points for up to two 120mm fans; one 120mm fan is offered as an optional add-on during factory configuration.

The GPU brace finger is only required during shipping. The system can be run without this part if it does not fit an upgraded GPU.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the side brace:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unscrew the four screws holding the side bracket in place (two on the front of the case, two on the back.)
    - Take note of which screw holes the side brace is screwed into, which varies by GPU. In the below photos, the second-to-innermost set of screw holes is used.

![Side brace screws](./img/side-brace-screws.webp)

3. Pull the side brace out of the chassis. Unplug the side fan connector from the splitter board on the right side, if connected.

![Side fan connector](./img/side-fan-connector.webp)

### Steps to adjust the GPU brace finger:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side brace](#steps-to-remove-the-side-brace).
2. To adjust the GPU brace finger's horizontal position, unscrew the four corner screws (highlighted green below), move the GPU brace finger's mounting bar, and reattach it in the desired position.
    - Any vertical alignment screws overlapping the side brace (such as the one highlighted cyan below) will also need to be removed.

![GPU brace finger screws, back](./img/gpu-brace-finger-screws-back.webp)

3. To adjust the GPU brace finger's vertical position, unscrew the three vertical adjustment screws, move the GPU brace finger, and reattach it in the desired position.

![GPU brace finger screws, side](./img/gpu-brace-finger-screws-side.webp)

## Replacing the bottom case fan:

Thelio Mira B4-N3 has one case-mounted intake fan on the bottom of the chassis.

**Part numbers:**
- The bottom case fan is a 140mm Be Quiet! Silent Wings 4 (model number `BQ SIW4-14025-MF-PWM`).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the bottom case fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
    - The [side brace](#removing-the-side-brace) can optionally be removed to provide easier access to the fan and its cabling.
2. Unplug the fan's cable from the Thelio Io daughterboard.
    - The bottom case fan plugs into the `INTAKE FAN`/`FANOUT2` port on the Thelio Io board.
    - When viewed from the access cutout on the front of the case, this connector is the lowest one with a white receptacle.

![Bottom case fan connector](./img/bottom-fan-connector.webp)

3. Unscrew the four fan screws from the bottom of the machine.
    - To avoid damaging other components, place the machine on its front side when working with the bottom surface.
    - A soft surface such as a towel can optionally be used to protect the work surface and the machine.

![Bottom case fan screws](./img/bottom-fan-screws.webp)

4. Remove the old fan from the case.
5. When installing the fan, mount the components in the following order:
    - Chassis
    - Dust filter
    - Acrylic spacer
    - Fan
6. The new fan's cable should be oriented towards the front-right corner of the case.
    - The cable runs along the inner corner of the case, passing through the velcro strap closest to the Thelio Io board.

![Bottom case fan cable management](./img/bottom-fan-cable.webp)

## Removing the CPU duct:

The CPU duct guides airflow through the CPU cooler. It covers the CPU and partially obstructs the RAM slots and top PCIe slot.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the CPU duct:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side brace](#removing-the-side-brace).
2. Unplug the two fan connectors (highlighted red below) from the Y cable connected to the top splitter board in the front corner of the machine.
    - You can optionally also unplug the Y cable from the splitter board (highlighted green below) and remove it.
    - The splitter board provides the same signal to both ports, so it doesn't matter which port the Y cable is plugged into.

![CPU fan connectors](./img/cpu-fan-connectors.webp)

3. Unfasten and loosen (or remove) the velcro loop securing the fan wires to the CPU duct (highlighted cyan above).
    - This can also be done as the last step if the loop is difficult to remove while the duct is still installed.
4. Unscrew the four back thumbscrews and two top crossbar screws holding the CPU duct in place.

![CPU duct thumbscrews (back)](./img/cpu-duct-screws-back.webp)

![CPU duct screws (top crossbar)](./img/cpu-duct-screws-top.webp)

5. Pull the CPU duct away from the machine.

## Replacing the RAM:

Thelio Mira B4-N3 supports up to 128GB (4x32GB) of RAM.

The RAM sticks are DDR5 DIMMs (non-ECC). With up to 64GB of RAM, the RAM runs at a speed of 4800 MHz; with greater than 64GB of RAM, the RAM runs at a speed of 4000 MHz.

If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the RAM:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the CPU duct](#removing-the-cpu-duct).
    - If there's no dedicated GPU installed, then removing the CPU duct is optional, but removal is still recommended to provide easier access to the RAM slots.
2. To remove an existing RAM stick, flip the top and bottom latches away from the stick, then pull the stick out of the slot.

![RAM slots](./img/ram-slots.webp)

3. Make sure the tabs on the top and bottom of the slot are open (pulled away from the slot), then insert the new RAM (or re-seat the existing RAM) into the slot.
    - The RAM stick will only fit in one direction. The larger group of pins goes on top.
    - Use the following guide for placement of the RAM sticks:
    ![RAM slot order](./img/ram-order.webp)
4. Replace the top case.

## Replacing the GPU:

Thelio Mira ships with an optional dedicated GPU in the PCIe 5.0 x16 slot (top slot). GPUs greater than three slots tall may obstruct the lower PCIe slots.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the GPU:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side brace](#removing-the-side-brace).
    - You can optionally [remove the CPU duct](#removing-the-cpu-duct) for easier access to the PCIe slot and power cable latches.
2. If you're removing a GPU, unplug the GPU power cable from the right side of the card. Hold down the latch on the connector while unplugging the cable.

![GPU power connections](./img/gpu-power.webp)

3. Unscrew the two back screws holding the PCIe bracket in place, and remove the PCIe bracket (or slide it into the rightmost position).

![PCIe bracket screws](./img/pcie-bracket.webp)

4. Push back the latch on the motherboard to free the PCIe connection, then pull the card out of the slot.
    - If the latch is difficult to reach between the GPU and the CPU heatsink, a long object (such as a screwdriver) can be used to push the latch.

![PCIe slots & latches](./img/pcie-slots.webp)

5. After inserting the new GPU into its slot, connect the power cable.
6. Once the GPU is installed, replace the back PCIe bracket, side brace, and top case.
    - The GPU brace finger may need to be [adjusted](#steps-to-adjust-the-gpu-brace-finger) before the side brace can be reinstalled.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Part numbers:**
- The CMOS battery is a standard KTS CR2032 battery.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side brace](#removing-the-side-brace).
    - Depending on the height of the GPU, it may help to also [remove the GPU](#replacing-the-gpu) for easier access.
2. Pull the clip away from the CMOS battery.

![CMOS battery](./img/cmos-battery.webp)

3. Pull the CMOS battery out of its slot.
4. If you are resetting the CMOS, hold down the power button for 10 seconds to discharge any residual energy in the system.
5. Replace the CMOS battery starting with the left side of the slot (opposite from the clip).
    - The positive side of the battery (with text) should face outward.
6. Replace the GPU, side brace, and top case.

## Replacing the M.2 drives:

Thelio Mira B4-N3 has four M.2 storage slots. All four slots are M-key and size 2280.

- All four slots support PCIe NVMe Gen 4.
- The bottom slot (`M2M_SB`) also supports SATA III.

If the bottom slot (`M2M_SB`) is populated with a PCIe NVMe drive, then the bottom two SATA ports (2 and 3) will become unavailable. The bottom two SATA ports are not used by default in Thelio Mira B4-N3.

Factory configurations only offer up to two M.2 SSDs (so at least two slots will be vacant by default).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the CPU duct](#removing-the-cpu-duct), and [remove the GPU](#replacing-the-gpu).
    - Removing the GPU is optional to access the top slot, but still recommended for ease of access.
2. Unscrew and remove the M.2 heatsink for the slot(s) you wish to access.
    - The heatsink screws are captive, and will not come away from the heatsink when fully loosened.

![M.2 heatsink screws](./img/m2-heatsink-screws.webp)

3. To remove a drive from a slot, push the corresponding circular lever upwards to release it, then pull it out of the slot.

![M.2 slots](./img/m2-slots.webp)

4. To insert a drive into a slot, insert the connector, then push the opposite side down onto the circular tab until it clicks into place.
5. Replace the M.2 heatsink(s).
    - If you're using a slot for the first time, peel the protective plastic off of the corresponding thermal tape on the heatsink.

![M.2 thermal tape](./img/m2-thermal-tape.webp)

6. Replace the GPU, CPU duct, side brace, and top case as applicable.

## Replacing the CPU fans:

Thelio Mira B4-N3 contains two 120mm CPU fans. The back fan is mounted on the CPU duct, and the middle fan is mounted within the CPU heatsink.

**Part numbers:**
- The CPU fans are Thermalright [TL-C12B V2](https://www.thermalright.com/product/tl-c12-b/) fans.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the duct-mounted CPU fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the CPU duct](#removing-the-cpu-duct).
3. Unscrew the four screws (two on each side) holding the fan bracket onto the duct.
    - Removing the bracket from the duct is not required, but it makes removal and installation of the fan much easier.
    - The velcro loop (highlighted cyan below) should already be unfastened from [removing the CPU duct](#removing-the-cpu-duct).

![CPU duct fan bracket screws](./img/cpu-duct-fan-bracket-screws.webp)

4. Unscrew the four screws attaching the bracket to the fan.

![CPU duct fan screws](./img/cpu-duct-fan-screws.webp)

5. When reinstalling the fan into the CPU duct:
    - The spinning side should face inward (towards the front of the chassis).
    - The cable should point towards the velcro strap (towards the top left, when viewed from the back).
    - Overtightening the fan bracket's screws may cause fan noise; if the fan is creating excessive noise, try slightly loosening some of the screws.

### Steps to replace the heatsink-mounted CPU fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the CPU duct](#removing-the-cpu-duct).
    - For easier access to the fan tabs, it's also recommended to [remove the side brace](#removing-the-side-brace) and [remove the dedicated GPU](#replacing-the-gpu) (if installed).
    - The fan should be unplugged as part of [removing the CPU duct](#removing-the-cpu-duct).
2. To release the fan, pull the metal clips on the top and bottom of the heatsink away from the fan, then away from the heatsink.

![CPU heatsink fan clips and connector](./img/cpu-heatsink-fan-clips.webp)

3. Slide the fan out from between the two heatsink blocks.
4. When reinstalling the CPU heatsink fan, the side with a stationary cover should face the back of the chassis.
    - The cable should point towards the top outer corner (top-right when viewed from the back of the case.)

## Replacing the CPU cooler and CPU:

The CPU cooler dissipates heat from the CPU to the heatsink, where the CPU fans expel it from the system. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU and the cooler/heatsink may help the system run cooler.

**Part numbers:**
- The CPU cooler is a [Thermalright Phantom Spirit 120](https://www.thermalright.com/product/phantom-spirit-120/).
- The CPU uses an Intel LGA 1700 socket.

**Tools required:** Cross-head (Phillips) screwdriver, thermal paste  
**Time estimate:** 45 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to remove the CPU cooler/thermal paste:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side brace](#removing-the-side-brace), [remove the CPU duct](#removing-the-cpu-duct), [remove the GPU](#replacing-the-gpu), and [remove the heatsink-mounted CPU fan](#steps-to-replace-the-heatsink-mounted-cpu-fan).
2. While holding the CPU cooler in place so it doesn't fall, loosen the screws on the top and bottom of the CPU cooler's vertical mounting bar.

![CPU cooler screws](./img/cpu-cooler-screws.webp)

3. Lower the cooler away from the CPU.
4. Using a paper towel, clean the existing thermal paste off of the heatsink and CPU. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

### Steps to replace the CPU:

1. Place the computer on its side so the motherboard is facing up.
2. Unscrew and remove the two horizontal CPU cooler mounting brackets.

![CPU cooler mounting bracket](./img/cpu-cooler-mounting-bracket-screws.webp)

3. Push the locking lever outward until it's able to spring away from the motherboard.
    - Caution: the locking lever may spring up with significant force when freed.

![CPU locking lever](./img/cpu-locking-lever.webp)

4. Flip the CPU holder away from the CPU.
    - The CPU holder opens in the opposite direction from the locking lever.

![CPU holder raised](./img/cpu-holder-raised.webp)

5. Carefully lift the CPU out of the CPU socket.
    - Be careful not to bend any of the gold pins on the CPU socket, and do not touch the gold pads on the CPU.

![CPU (removed)](./img/cpu-removed.webp)

6. Gently place the new CPU into the socket.
    - The triangle on the CPU should be oriented to match the triangle on the CPU cover, pointing towards the bottom left of the motherboard.
7. Flip the CPU cover back onto the CPU and push the locking lever down into place.
8. Reinstall the horizontal CPU cooler mounting brackets.

### Steps to install the thermal paste/CPU cooler:

1. Draw an `X` shape of thermal paste onto the CPU.

![Thermal paste application](./img/thermal-paste-application.webp)

2. Place the CPU cooler onto the CPU; while holding it in place, screw its vertical mounting bar into the horizontal mounting brackets.
    - The cooler should be oriented so the Thermalright logos are on the bottom.
    - Insert each screw partially, then finish tightening both.
3. Set the computer upright, then reinstall the cooler-mounted CPU fan, CPU duct, GPU, side brace, and top case.

## Replacing the power supply:

The power supply unit (PSU) can be replaced with another unit of the same model.

**Part numbers:**
- The default PSU in units shipped after July 2024 is the [XPG Core Reactor II](https://www.xpg.com/us/xpg/pc-components-core-reactor-ii).
- The default PSU in older units is the [Be Quiet! Pure Power 12 M](https://www.bequiet.com/en/powersupply/4162).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 45 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the power supply:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side brace](#removing-the-side-brace), and [unplug the GPU (if installed)](#replacing-the-gpu).
2. Unscrew the power supply bracket's left side from the bottom of the chassis.

![Power supply bracket screw (left)](./img/psu-bracket-screw-left.webp)

3. Unscrew and remove the cable management bracket on the right side of the chassis, then unscrew the power supply bracket's right side from the chassis.

![Cable management bracket](./img/psu-cable-management-bracket.webp)
![Power supply bracket screw (right)](./img/psu-bracket-screw-right.webp)

4. Unscrew the power supply's four screws from the back of the chassis.

![Power supply screws](./img/psu-screws.webp)

5. Unplug all of the modular cabling from the back of the PSU.

![PSU cabling](./img/psu-cables.webp)

6. Remove/replace the power supply.
    - The replacement PSU should be installed with the fan facing the bottom of the case.
    - Place the PSU on the rubber post and hold it against the screwholes in the back of the case while attaching it.
7. Connect the power cables to the new power supply and GPU (if installed), then reinstall the PSU brace, side brace, and top case.

## Replacing the Thelio Io board:

Named after Jupiter's moon Io, the Thelio Io daughterboard handles the front power button and fan control. If the Thelio Io board becomes defective, it can be replaced using the instructions below.

**Part numbers:**
- Thelio Mira B4-N3 uses [Thelio Io version 2](https://github.com/system76/thelio-io/tree/92c2a60b6d6acc0f9d51d819cba07ad28e2b03f3) ([PCB revision thelio_io_2.3](https://github.com/system76/thelio-io-hardware/tree/91814370002f762ac01cd1dd99dcbb43336352ab/pcb-thelio-io)).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the Thelio Io board:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
    - The [CPU duct](#removing-the-cpu-duct) and [side brace](#removing-the-side-brace) can optionally be removed to provide easier access to the cabling.
2. Use the cutout on the front of the chassis to unplug all cabling from the Thelio Io board.
    - The topmost connector requires pulling the white tab while unplugging.

![Thelio Io cabling cutout](./img/thelio-io-cabling-cutout.webp)

3. Unscrew the two screws holding the daughterboard on from the right side of the chassis.

![Thelio Io drive cage screws](./img/thelio-io-screws.webp)

4. Screw in the new Thelio Io board and reconnect the wiring.

### Thelio Io wiring guide:

![Thelio Io wiring guide](./img/thelio-io-board.webp)

1. When wiring the Thelio Io board, refer to the port labels and the following guide.
    - `FANOUT1`/`CPU FAN` - to the top fan splitter (connecting to the [CPU fans](#replacing-the-cpu-fans)).
    - `FANOUT4`/`AUX FAN` - to the bottom fan splitter (below the [CPU fan splitter](#replacing-the-cpu-fans)).
    - `FANOUT2`/`INTAKE FAN` - to the [bottom case fan](#replacing-the-bottom-case-fan).
    - `FANOUT3`/`GPU FAN` - to the [side brace](#removing-the-side-brace) fan splitter.
        - May be disconnected by default if no side fan is ordered as factory configuration.
    - `FANIN1`/`MOTHERBOARD FAN INPUT` - to the `CPU_FAN` header at the top right of the motherboard, highlighted cyan below.
    
    ![Motherboard CPU output header](./img/motherboard-fan-header.webp)
    - `POWER1`/`POWER INPUT` - to the [power supply](#replacing-the-power-supply).
        - The white plastic clip needs to be held away from the connector to unplug this cable from the Thelio Io board.
    - `PFP1`/`FRONT PANEL` - to the [power button receptacle](#troubleshooting-the-power-button) on the front panel.
        - On the Thelio Io board, the wire color order (from top to bottom) is red, black, blue, black.
        - On the power button receptacle, the wire color order (from left to right) is red, black, blue, black.
    - `PMB1`/`MOTHERBOARD` - to the first four pins of the `F_PANEL` header at the bottom right of the motherboard, highlighted green below.
        - On the Thelio Io board, the wire color order (from top to bottom) is red, black, blue, black.
        - On the motherboard, the wire color order (from left to right) is red, black, blue, black.
    - `USB` - to the `USB_3_4` header on the bottom edge of the motherboard, highlighted yellow below.
        - A small clip needs to be held down to unplug this cable from the Thelio Io board.
        - This port can alternatively be connected to the `USB_5_6` header if the `USB_3_4` header is connected to the wireless card.
        
    ![Motherboard power button & USB headers](./img/motherboard-power-usb.webp)

## Replacing the SATA backplane:

The SATA backplane provides two 2.5" SATA data and power connectors for the [2.5" drive cage](#addingremoving-25-storage-drives).

**Part numbers:**
- The part number and version for the SATA backplane is [thelio-io-sata_2.2](https://github.com/system76/thelio-io-hardware/tree/91814370002f762ac01cd1dd99dcbb43336352ab/pcb-thelio-io-sata).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the SATA backplane:

1. Follow the steps above to [remove the top case](#removing-the-top-case), then [remove the 2.5" drive cage cover and all 2.5" SATA drives](#addingremoving-25-storage-drives).
    - The [CPU duct](#removing-the-cpu-duct) can optionally be removed to provide easier access to the cabling.
2. Use the cutouts on the front right corner of the chassis to unplug the 4-pin Berg power connector (highlighted cyan below) and the two SATA data cables (highlighted green below) from the SATA backplane.

![2.5" drive cage cabling & screws](./img/sata-backplane-cabling.webp)

3. Unscrew the four screws holding the drive cage onto the chassis (highlighted red above), then remove the drive cage from the chassis.
4. Unscrew the four SATA backplane screws from the drive cage, then push the SATA backplane out through the front of the drive cage.

![SATA backplane screws](./img/sata-backplane-screws.webp)

5. Place the new SATA backplane into the drive cage and secure it with the four SATA backplane screws, then reinstall the drive cage (if necessary).
6. Plug the 4-pin Berg power connector and SATA data cables into the SATA backplane.
    - The order of the SATA data cables shouldn't matter as long as your operating system and software is configured to address disks by UUID (e.g. `/dev/disk/by-id/...`) instead of by letter (e.g. `/dev/sd_`).
    - By default, the `DATA1` port connects to SATA port 4 on the motherboard, and the `DATA0` port connects to SATA port 5.
    - Ensure the cables are not plugged into SATA ports 2 and 3 (the bottom two ports), as these ports are unavailbable when the bottom M.2 slot contains a PCIe NVMe SSD.

![Motherboard SATA ports](./img/motherboard-sata-ports.webp)

7. Reinstall the CPU shroud (if necessary), any 2.5" drives that were removed, the 2.5" drive cage cover, and the top case.

## Replacing the top I/O:

Thelio Mira B4-N3 includes a top I/O module providing audio and USB ports. If the top ports are damanged or become defective, they can be replaced using the steps below.

**Part numbers:**
- The top I/O module's part number is `MYS7523 Rev. 4.0`.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the top I/O:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the CPU duct](#removing-the-cpu-duct).
    - You can optionally [remove the side brace](#removing-the-side-brace) for easier access to the wiring.
2. Unplug the `F_AUDIO` header at the bottom-left corner of the motherboard, below the wireless card.

![Top I/O audio header](./img/top-io-headers-audio.webp)

3. Unplug the `F_U32` header (highlighted cyan below) and `F_U32C` header (highlighted green below) along the right edge of the motherboard, between the RAM and the 2.5" drive cage.

![Top I/O USB headers](./img/top-io-headers-usb.webp)

4. Unscrew the two front screws holding the top I/O board onto the chassis.

![Top I/O screws](./img/top-io-screws.webp)

5. Remove the top I/O board from the system.
6. Insert the new top I/O board into the system and screw it into place.
7. Reconnect the audio and USB headers.
8. Replace the side brace (if necessary), CPU shroud, and top case.

## Troubleshooting the power button:

If the front power button doesn't power the machine on or doesn't light up when the system is powered on, try the following troubleshooting steps:

1. Ensure the system powers on normally using the internal power button.
2. Reseat the front power button to ensure it's making proper contact.
3. Check the wiring for the front power button.
4. Replace the front power button, if necessary.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to power the machine on using the internal power button:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Ensure the system is plugged into power, and the power supply switch is in the 1 (On) position.
3. Push the small button labeled `POWER` on the Thelio Io board.
    - The white LED to the left of the button lights up to indicate when the system is powered on (and pulses when the system is suspended).

![Internal power button](./img/thelio-io-power-button.webp)

4. If the Thelio Io `POWER` button powers the machine on and the LED lights up, then the issue is either the front power button or its connection to the Thelio Io board. [Check the front power button wiring](#steps-to-check-the-front-power-button-wiring).
5. If the Thelio Io `POWER` button and/or LED does not work, then the issue is either the Thelio Io board or its connection to the motherboard. [Check the wiring between the Thelio Io board and the motherboard](#thelio-io-wiring-guide).

### Steps to check the front power button wiring:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
    - In the below photo, the [2.5" drive cage](#replacing-the-sata-backplane) has also been removed for greater visibility.
2. On the back of the power button, the four pins should be connected to the four-wire connector as follows:

![Power button wiring](./img/power-button-wiring.jpg)

3. On the front power button receptacle, the four-pin connector should have the red wire on the left and the black wire on the right (when viewed from the back of the computer.)
    - If necessary, you can [remove the 2.5" drive cage](#replacing-the-sata-backplane) for easier access to the power button receptacle's connector.

![Power button receptacle](./img/power-button-receptacle.webp)

4. The front power button receptacle should plug into the `PFP1` port on the Thelio Io board, with the red wire on the top (see the [Thelio Io wiring guide](#thelio-io-wiring-guide).)

### Steps to replace the power button:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Follow the instructions in the [Replace the Thelio Power Button](https://support.system76.com/articles/thelio-power-button/) support article.
