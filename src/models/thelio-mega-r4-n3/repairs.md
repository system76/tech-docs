# Thelio Mega (Parts & Repairs)

Many components in your Thelio Mega can be upgraded or replaced as necessary. This page uses photos of the the R4-N3 revision, which indicates:

- **R4:** The fourth AMD motherboard used in Thelio Mega.
- **N3:** Based on the third major revision of the Thelio Mega chassis.
    - The Thelio Mega form factor is not currently available as a standalone Nebula chassis.

Minor case details may vary based on the production date of the unit, but screw counts, general component locations, and other details should remain the same unless otherwise noted.

Power the machine off, switch off the power supply, and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Replacing the front accent strip](#replacing-the-front-accent-strip)
- [Removing the top case](#removing-the-top-case)
- [Removing the side fan mount](#removing-the-side-fan-mount)
- [Replacing the side intake fans](#replacing-the-side-intake-fans)
- [Adding/removing 2.5" storage drives](#addingremoving-25-storage-drives)
- [Removing the GPU brace](#removing-the-gpu-brace)
- [Removing the CPU duct](#removing-the-cpu-duct)
- [Replacing a GPU](#replacing-a-gpu)
- [Replacing the M.2 drives](#replacing-the-m2-drives)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the CPU fans](#replacing-the-cpu-fans)
- [Replacing the CPU cooler/thermal paste and CPU](#replacing-the-cpu-cooler-and-cpu)
- [Replacing the RAM](#replacing-the-ram)
- [Opening the PSU chamber](#opening-the-psu-chamber)
- [Replacing the bottom intake fan](#replacing-the-bottom-intake-fan)
- [Replacing the power supply](#replacing-the-power-supply)
- [Removing the top crossbar](#removing-the-top-crossbar)
- [Replacing the Thelio Io board](#replacing-the-thelio-io-board)
- [Replacing the SATA backplanes](#replacing-the-sata-backplanes)
- [Replacing the top I/O](#replacing-the-top-io)
- [Troubleshooting the power button](#troubleshooting-the-power-button)

## Replacing the front accent strip:

Thelio Mega includes a customizable accent panel on the front of the case, which can be swapped to change the case's look and feel. The instructions for swapping the accent are also available in [video form](https://system76.com/r/diyaccentpanel).

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

![Front accent strip removal](./img/accent-strip-removal.webp)

## Removing the top case:

The top case can be removed to access the internal components.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 2 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the top case:

1. Remove the eight outer screws holding the top case onto the machine.

![Top case screws](./img/top-case-screws.webp)

2. Slide the top case up and off of the machine.

## Removing the side fan mount:

The side fan mount holds the two 140mm side intake fans, which cool the GPU(s) and 2.5" storage drives.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the side fan mount:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unplug the side fan connector from the top of the side fan mount, next to the back of the chassis.

![Side fan connector](./img/side-fan-connector.webp)

3. Unscrew the four screws holding the side fan mount in place (two on the front of the case, two on the back).

![Side fan mount screws](./img/side-fan-mount-screws.webp)

4. Pull the side fan mount out of the chassis.

## Replacing the side intake fans:

The 140mm side intake fans can be independently replaced.

**Part numbers:**
- Each side fan is a 140mm Be Quiet! Silent Wings 4 (model number `BQ SIW4-14025-MF-PWM`).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the side intake fans:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side fan mount](#removing-the-side-fan-mount).
2. Unscrew the four screws holding the fan in place.

![Side fan screws](./img/side-fan-screws.webp)

3. Free the fan cable from the velcro straps and unplug it from the splitter board.

![Side fan cabling](./img/side-fan-cabling.webp)

4. When installing the new fan, orient the spinning side out of the chassis and the stationary side into the chassis.
    - The fan's cable should point towards the same long edge as the splitter board, but the opposite short edge.

## Adding/removing 2.5" storage drives:

Thelio Mega R4-N3 supports up to four 2.5" SATA III drives.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 8 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to add/remove 2.5" storage drives:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side fan mount](#removing-the-side-fan-mount).
2. Unscrew the two screws securing the drive bay's cover.

![2.5" drive bay covers](./img/25-bay-covers.webp)

3. If you are adding a new drive, pop out the black plastic ring on the top crossbar and slide out four screws (per drive).

![2.5" drive screws](./img/25-drive-screws.webp)

4. Insert four screws into each 2.5" storage drive you wish to install.
5. Slide each 2.5" drive into one of the slots leading to the drive bay's SATA backplane.

![2.5" drive installation](./img/25-drive-installation.webp)  

![Installed 2.5" drive](./img/25-drive-installed.webp)

6. Replace the black plastic screw ring and the 2.5" drive bay cover, followed by the side fan mount and top case.

## Removing the GPU brace:

The GPU brace provides mounting points for GPU fingers, which can optionally support graphics cards or other PCI Express devices. GPU fingers are primarily intended to avoid shipping damage, and the system can be run without GPU fingers if they don't fit an upgraded GPU.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the GPU brace:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side fan mount](#removing-the-side-fan-mount).
2. Remove the four screws holding the GPU brace in place (two at the top attached to the CPU duct, and two at the bottom attached to the PSU chamber).
    - As visible in the photo below, the elongated screw holes allow the GPU brace to be slightly rotated, which can allow the GPU finger(s) to better support the exact position of the GPU.

![GPU brace screws](./img/gpu-brace-screws.webp)

3. Pull the GPU brace out of the chassis.

### Steps to adjust the GPU fingers:

1. Unscrew the four screws (two on each side) holding the GPU finger onto the GPU brace, highlighted cyan below.

![GPU finger screws](./img/gpu-finger-screws.webp)

2. Move the GPU finger to the desired position, then re-attach the screws.
3. Repeat for any additional GPU fingers present.
4. To adjust the depth the GPU brace extends into the chassis, loosen the screws highlighted yellow above, then tighten them when the GPU brace is in the desired position.

## Removing the CPU duct:

The CPU duct guides airflow through the CPU cooler. It covers the CPU and RAM slots on the motherboard.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 9 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the CPU duct:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), and [remove the GPU brace](#removing-the-gpu-brace).
2. Unscrew the four back screws holding the CPU duct in place.

![CPU duct screws](./img/cpu-duct-screws-back.webp)

3. Unplug the braided cables for the two CPU duct-mounted fans, highlighted light blue below.
    - The non-braided Y-cable does not need to be unplugged at this stage.

![Top exhaust fans](./img/cpu-duct-screws-connectors-top.webp)

4. While holding the CPU duct up, unscrew the two top screws connecting it to the top crossbar, highlighted green above.
5. Pull the CPU duct out of the machine.

## Replacing a GPU:

Thelio Mega R4-N3 contains four PCI Express 5.0 x16 slots. Factory configurations are offered with up to three GPUs. Four GPUs may function, depending on space and power constraints.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace a GPU:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace).
    - To access the top PCIe slot (which is the primary GPU slot), also [remove the CPU duct](#removing-the-cpu-duct).
2. If you're removing a GPU, unplug the GPU power cable from the right side of the card. Hold down the latch on the connector while unplugging the cable.

![GPU power connections](./img/gpu-power.webp)

3. Loosen the two back screws holding the PCIe bracket in place, then slide the PCIe bracket open.
    - You can optionally remove the screws and PCIe bracket instead.

![PCIe bracket screws](./img/pcie-bracket.webp)

4. Press the latch on the motherboard to free the PCIe connection, then pull the card out of the slot.
    - The top PCIe slot (the primary GPU slot) can also be freed by pressing the square quick-release button above the M.2 heatsink, highlighted red below.

![GPU order & PCIe latches](./img/pcie-slots.webp)

5. When installing new GPUs, utilize the top slot first. Other slots can be utilized in the order that best fits the GPUs, since they all run at equal bandwidth.
6. After inserting the new GPU into its slot, connect the power cables.
    - The maximum number of power cables are preinstalled in your system, but some may be secured with velcro straps within the [PSU chamber](#opening-the-psu-chamber) if they weren't used in the factory configuration.
7. Once all GPUs are installed, replace the back PCIe bracket, CPU duct, GPU brace, side fan mount, and top case.

## Replacing the M.2 drives:

Thelio Mega R4-N3 has four M.2 slots, which all support PCIe NVMe Gen 5 x4.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 23 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the M.2 drives:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace), and [remove the GPUs](#replacing-a-gpu).
2. Remove the M.2 heatsink by rotating the latch clockwise, then holding the latch down while pivoting the heatsink away from the latch.
    - It may take some pressure to break the seal of the thermal tape; pull slowly to avoid breaking the thermal tape.

![M.2 heatsink screws](./img/m2-heatsink.webp)

3. To remove an M.2 drive, rotate the latch, pull the end of the M.2 drive slightly away from the thermal tape on the motherboard, then pull the drive out of the slot.
    - The drive may lift away from the motherboard on its own if the thermal tape is not present.
    - Thermal tape is not present behind Slot D.

![M.2 slot screws](./img/m2-slots.webp)

4.  If utilizing a slot for the first time, peel the plastic covering off of the thermal tape behind the slot on the motherboard, and off of the thermal tape in the corresponding position on the heatsink.
    - Thermal tape is not present behind Slot D on the motherboard (but is present for Slot D on the heatsink).
    - In the below photos, Slots C and D have thermal tape that's ready to use, while Slots A and B still have the plastic coverings applied.

![M.2 thermal tape (motherboard)](./img/m2-thermal-tape-motherboard.webp)
![M.2 thermal tape (heatsink)](./img/m2-thermal-tape-heatsink.webp)

5. To install an M.2 drive, insert its keyed end into the slot, then press the opposite end down onto the latch until it clicks into place.
    - If the latch does not rotate on its own when the drive is pressed down, rotate it manually to allow the drive to be seated underneath it.
6. Replace the M.2 heatsink, GPU(s), CPU duct, GPU brace, side fan mount, and top case.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Warning (ingestion hazard):** Keep batteries out of reach of children. Death or serious injury can occur if ingested. If a battery is suspected to be swallowed or inserted inside any part of the body, seek immediate medical attention. In the US, you can also call the National Battery Ingestion Hotline for guidance: [+1 (800) 498-8666](tel:18004988666)

**Part numbers:**
- The CMOS battery is a standard KTS CR2032 battery.

**Tools required:** Cross-head (Phillips) screwdriver, plastic spludger tool  
**Time estimate:** 27 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace), [remove the GPUs](#replacing-a-gpu), and [remove the M.2 heatsink](#replacing-the-m2-drives).
2. Use a small plastic tool to pry the CMOS battery out of the slot from the right side.

![CMOS battery](./img/cmos-battery.webp)

3. Insert the new CMOS battery into the slot with the rounded side facing inward and the label facing outward.
4. Reinstall the M.2 heatsink, GPUs, GPU brace, side fan mount, and top case.

## Replacing the CPU fans:

Thelio Mega R4-N3 contains four CPU fans: two mounted in the CPU duct, and two mounted on the CPU cooler heatsink.

**Part numbers:**
- CPU duct fans: 2x Be Quiet! Silent Wings 4 (`BQ SIW4-12025-MF-PWM`)
- CPU cooler heatsink fans: 2x Arctic Freezer 4U fans
    - Included with the Arctic Freezer 4U-M CPU cooler

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the duct-mounted CPU fans:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace), and [remove the CPU duct](#removing-the-cpu-duct).
2. Free the cables from the velcro strap on the top of the CPU duct.

![CPU duct velcro strap](./img/cpu-duct-cable-strap.webp)

3. To remove the side CPU duct fan, unscrew the four fan screws from the outside of the CPU duct.
    - When reinstalling the fan, the spinning side faces outward, and the cable goes on the corner closest to the velcro strap.

![CPU duct side fan screws](./img/cpu-duct-side-fan-screws.webp)

4. To remove the back CPU duct fan, unscrew the four screws holding the fan bracket into the duct (two on the top, and two on the bottom).

![CPU duct inner screws](./img/cpu-duct-back-bracket-screws.webp)

5. Push the fan bracket slightly into the duct, then pull it out the side of the duct.
6. Unscrew the four fan screws from the fan bracket to remove the fan.
    - When reinstalling the fan, the spinning side should face into the CPU duct, with the bracket's cable cutout closest to the velcro strap.

![CPU duct back fan screws](./img/cpu-duct-back-fan-screws.webp)

### Steps to replace the cooler-mounted CPU fans:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace), and [remove the CPU duct](#removing-the-cpu-duct).
2. Disconnect the rear cooler fan from the front cooler fan's Y-cable, and unplug the front cooler fan's Y-cable from the splitter board.
    - The heatsink fan cable connection points are highlighted red below.
    - In the below photo, the [GPU](#replacing-a-gpu) and [top crossbar](#removing-the-top-crossbar) have been removed for better visibility.

![CPU heatsink fans & connectors](./img/cpu-heatsink-fans-installed.webp)

3. Pull the fans (highlighted green above) directly out of the case, sliding them off the heatsink.

![CPU heatsink fans (removed)](./img/cpu-heatsink-fans-removed.webp)

4. When reinstalling the CPU heatsink fans, the fan with a normal cable goes on the back of the heatsink, while the fan with a Y-cable goes on the front.

## Replacing the CPU cooler and CPU:

The CPU cooler dissipates heat from the CPU to the heatsink, where the CPU fans expel it from the system. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU and the cooler/heatsink may help the system run cooler. The thermal paste should generally also be replaced whenever the CPU cooler is removed from the CPU for any reason.

**Part numbers:**
- CPU cooler: Arctic Freezer 4U-M
- CPU socket: AMD sTR5 socket

**Tools required:** Cross-head (Phillips) screwdriver (long), AMD Threadripper torque tool or compatible 1.5 Nm (13.275 in-lb) torque 3.95mm six-point star (Torx 20) screwdriver, thermal paste
**Time estimate:** 35 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to remove the CPU cooler/thermal paste:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace), [remove the CPU duct](#removing-the-cpu-duct), and [remove the cooler-mounted CPU fans](#steps-to-replace-the-cooler-mounted-cpu-fans).
2. While holding the cooler in place so it doesn't fall, loosen the four CPU cooler screws.
    - The screws are held captive and will not fully detatch from the cooler.

![CPU cooler screws](./img/cpu-cooler-screws.webp)

3. The cooler will come away from the CPU.
4. Using a paper towel, clean the existing thermal paste off of the heatsink and CPU.
    - Due to the design of the heatsink, some thermal paste may remain between the heatsink pipes. Only the flat section of the pipes that makes contact with the CPU needs to be cleaned.
    - You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![CPU thermal paste removal](./img/cpu-thermal-paste-removal.webp)

### Steps to replace the CPU:

1. Place the computer on its side so the motherboard is facing up.
2. Using the AMD Threadripper torque screwdriver (or a compatible T20 screwdriver), loosen the three CPU bracket Torx screws in reverse order of the printed numbers (starting with #3).
    - The screws are held captive and will not come out of the bracket. 

![CPU Torx screws](./img/cpu-bracket-screws.webp)

3. The CPU bracket cover will spring up when all its screws are fully loosened.
    - If the bracket cover only partially opens, you may need to loosen screws #2 and/or #3 more.

![CPU bracket (open)](./img/cpu-bracket-open.webp)

4. Using the blue corner tabs (visible above), flip the orange CPU carrier frame up and away from the CPU socket.

![CPU carrier frame (raised)](./img/cpu-carrier-raised.webp)

5. Slide the CPU carrier tray out of the CPU bracket.
    - Be careful not to bend any of the gold pins on the CPU socket, and do not touch the gold pads on the CPU.

![CPU (removed)](./img/cpu-removed.webp)

6. Slide the new CPU's carrier tray into the CPU bracket.
    - AMD Threadripper CPUs come with carrier trays, so removing the CPU from the tray is generally not necessary.
7. Flip the CPU bracket back down onto the socket, gently pressing the blue tabs to seat the CPU carrier tray onto the motherboard.
8. Flip the CPU bracket cover back down.
9. Screw the three Torx screws back into place in order of the printed numbers (starting with #1).
    - The AMD Threadripper-branded tool applies 1.5 Nm of torque. When the screw is tight enough, it will give way.
    - If you're using a different screwdriver, use a torque tool to apply approximately the same amount of torque (1.5 Nm, or ~13.275 in-lb).
    - If you're using a screwdriver without a torque tool, try to tighten all three screws evenly. After re-assembling the computer, run a RAM test to ensure the CPU is secured with the correct amount of force.

### Steps to install the thermal paste/CPU cooler:

1. Draw an `X` shape of thermal paste onto the CPU.

![Thermal paste application](./img/thermal-paste-application.webp)

2. Place the CPU cooler onto the CPU; while holding it in place, tighten the four screws.
    - The two screws on the left side use the outer holes; the two screws on the right side use the inner holes.
    - The air flow arrows stamped into the top of the heatsink should point towards the back of the chassis.
    - Insert each screw partially, then finish tightening both.
3. Set the computer upright, then reinstall the cooler-mounted CPU fans, CPU duct, GPU brace, side fan mount, and top case.

## Replacing the RAM:

Thelio Mega R4 supports up to 512GB (8x64GB) of ECC DDR5 RAM DIMMs running at a maximum speed of 5600 MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 17 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the RAM:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace), and [remove the CPU duct](#removing-the-cpu-duct).
    - You can optionally [remove the CPU cooler](#replacing-the-cpu-cooler-and-cpu) for easier access to the innermost RAM slots; it's been removed for better visibility in the below photo.
2. To remove an existing RAM stick, flip the latches on each side away from the stick, then pull the stick out of the slot.

![RAM slots](./img/ram-slots.webp)

3. Make sure the tabs on the left and right of the slot are open (pulled outwards), then insert the new RAM (or re-seat the existing RAM) into the slot.
    - The RAM stick will only fit in one direction. The larger group of pins goes on the right side.
    - Use the following guide for placement of the RAM sticks:

![RAM slot order](./img/ram-order.webp)

4. Replace the CPU cooler (if necessary), CPU duct, GPU brace, side fan mount, and top case.

## Opening the PSU chamber:

The PSU chamber houses the power supply unit (PSU) and its related cabling, and provides a mounting point for the bottom intake fan.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 12 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to open the PSU chamber:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), and [remove the GPU brace](#removing-the-gpu-brace).
2. [Unplug the power cables from all installed GPUs](#replacing-a-gpu).
3. Unscrew the four side screws holding the PSU chamber's cover on.

![PSU chamber screws](./img/psu-chamber-screws.webp)

4. Pull the cover off of the PSU chamber.
    - The [bottom intake fan's cable](#replacing-the-bottom-intake-fan) does not need to be untied to access the inside of the PSU chamber, but can be untied for easier access.

## Replacing the bottom intake fan:

The 140mm bottom intake fan can be independently replaced.

**Part numbers:**
- The bottom intake fan is a 140mm Be Quiet! Silent Wings 4 (model number `BQ SIW4-14025-MF-PWM`).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 18 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the bottom intake fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace), and [open the PSU chamber](#opening-the-psu-chamber).
2. Free the cable from the velcro loop (near the power button receptacle) and unplug it from the Thelio Io board.

![Bottom fan velcro strap](./img/bottom-fan-cable.webp)

3. Unscrew the four screws holding the fan onto the top cover of the PSU chamber.

![Bottom fan screws](./img/bottom-fan-screws.webp)

4. Screw in the new fan.
    - The fan should be oriented so the cable is closest to the cable cutout in the PSU chamber cover, with the spinning side facing down.
5. Pass the fan's cable through the PSU chamber cover, plug the new fan into the `INTAKE FAN` (`FANOUT2`) port on the Thelio Io board, and secure the excess cabling with the velcro loop.
6. Close the PSU chamber and reinstall the GPU brace, side fan mount, and top case.

## Replacing the power supply:

The power supply unit (PSU) is modular and can be replaced with another unit of the same model. Different models may not be compatible with the cabling pre-installed in the Thelio Mega.

**Part numbers:**
- The default power supply is a Thermaltake Toughpower GF3 1650W Gold.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the power supply:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side fan mount](#removing-the-side-fan-mount), [remove the GPU brace](#removing-the-gpu-brace), and [open the PSU chamber](#opening-the-psu-chamber).
2. Unplug all of the modular cabling from the back of the PSU.
    - Some of the cables may be easier to unplug after the PSU has been unscrewed/removed from the case.

![PSU cabling](./img/psu-cabling.webp)

3. Unscrew the four screws holding the PSU in from the back of the case.

![PSU back screws](./img/psu-screws.webp)

4. Slide the PSU into the chassis and then pull it out of the PSU chamber.
5. Insert the new PSU, setting it on top of the rubber post that holds it at the correct height.
    - The replacement PSU should be installed with the fan facing the bottom of the case.

![PSU post](./img/psu-post.webp)

6. Screw in the replacement PSU.
    - You may need to hold the PSU up to the back of the chassis to align the screwholes while inserting the screws.
7. Use the labels and pin counts on the cables and ports to ensure the power cables are reconnected to the new PSU in the proper locations.
8. If the replacement PSU has a "Smart Zero Fan" switch, make sure it's switched on for the optimal fan curve.

## Removing the top crossbar:

The top crossbar can be replaced for repair or removed for easier access to internal components.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 3 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the top crossbar:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unscrew the top crossbar from the front of the chassis.

![Top crossbar screws (front)](./img/top-crossbar-screws-front.webp)

3. Unscrew the top crossbar from the back of the chassis.

![Top crossbar screws (back)](./img/top-crossbar-screws-back.webp)

4. Pull the top crossbar away from the chassis.

## Replacing the Thelio Io board:

Named after Jupiter's moon Io, the Thelio Io daughterboard handles the front power button and fan control. If the Thelio Io board becomes defective, it can be replaced using the instructions below.

**Part numbers:**
- Thelio Mega R4-N3 uses [Thelio Io version 2](https://github.com/system76/thelio-io/tree/92c2a60b6d6acc0f9d51d819cba07ad28e2b03f3) ([PCB revision thelio_io_2.3](https://github.com/system76/thelio-io-hardware/tree/91814370002f762ac01cd1dd99dcbb43336352ab/pcb-thelio-io)).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the Thelio Io board:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side fan mount](#removing-the-side-fan-mount).
    - It's optional but recommended to also [remove the GPU brace](#removing-the-gpu-brace) and [remove the CPU duct](#removing-the-cpu-duct) for easier access to the cabling.
2. Use the cutout on the front of the chassis to unplug all cabling from the Thelio Io board.
    - The second-from-top connector (`POWER1`) requires pulling the white tab while unplugging.
    - The bottom connector (`USB`) requires holding the black clip while unplugging.

![Thelio Io cabling cutout](./img/thelio-io-cabling-cutout.webp)

3. Unscrew the two screws holding the daughterboard on from the right side of the chassis.

![Thelio Io screws](./img/thelio-io-screws.webp)

4. Screw in the new Thelio Io board and reconnect the wiring.

### Thelio Io wiring guide:

![Thelio Io wiring guide](./img/thelio-io-board.webp)

1. When wiring the Thelio Io board, refer to the port labels and the following guide.
    - `FANOUT1`/`CPU FAN` - to the left fan splitter (connecting to the [cooler-mounted CPU fans](#steps-to-replace-the-cooler-mounted-cpu-fans)).
    - `FANOUT2`/`INTAKE FAN` - to the [bottom intake fan](#replacing-the-bottom-intake-fan).
    - `FANOUT3`/`GPU FAN` - to the [side fan mount's](#removing-the-side-fan-mount) fan splitter.
    - `FANOUT4`/`AUX FAN` - to the right fan splitter (connecting to the [duct-mounted CPU fans](#steps-to-replace-the-duct-mounted-cpu-fans)).
    - `FANIN1`/`MOTHERBOARD FAN INPUT` - to the `CPU_FAN` header at the top right of the motherboard, highlighted cyan below.
    
    ![Motherboard CPU output header](./img/motherboard-fan-header.webp)
    - `POWER1`/`POWER INPUT` - to the [power supply](#replacing-the-power-supply) via a Molex (large 4-pin) to Berg (small 4-pin) adapter cable.
        - The white plastic clip needs to be held away from the connector to unplug this cable from the Thelio Io board.
        - The adapter cable may be a Y-cable; the other small end can be left unplugged.
    - `PFP1`/`FRONT PANEL` - to the [power button receptacle](#troubleshooting-the-power-button) on the front panel.
        - On the Thelio Io board, the wire color order (from top to bottom) is red, black, blue, black.
        - On the power button receptacle, the wire color order (from left to right) is red, black, blue, black.
    - `PMB1`/`MOTHERBOARD` - to the first four pins of the `F_PANEL` header at the bottom right of the motherboard, highlighted green below.
        - On the Thelio Io board, the wire color order (from top to bottom) is red, black, blue, black.
        - On the motherboard, the wire color order (from left to right) is red, black, blue, black.

    ![Motherboard power button & USB headers](./img/motherboard-power-usb.webp)
    - `USB` - to the `F_USB2` header on the bottom edge of the motherboard, highlighted yellow above.
        - A black plastic clip needs to be held down to unplug this cable from the Thelio Io board.
        - This port can alternatively be connected to the `F_USB1` header on the motherboard if the `F_USB2` header becomes defective.

## Replacing the SATA backplanes:

Each of the two SATA backplanes provides two 2.5" SATA III data and power connectors for its corresponding [2.5" drive cage](#addingremoving-25-storage-drives).

**Part numbers:**
- The part number and version for the SATA backplane is [thelio-io-sata_2.2](https://github.com/system76/thelio-io-hardware/tree/91814370002f762ac01cd1dd99dcbb43336352ab/pcb-thelio-io-sata).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the SATA backplanes:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side fan mount](#removing-the-side-fan-mount), then [remove the 2.5" drive cage cover and all 2.5" SATA drives](#addingremoving-25-storage-drives) in front of the backplane(s) you're replacing.
2. Use the cutout on the right side of the chassis to unplug the 4-pin Berg power connector (highlighted cyan below) and the two SATA data cables (highlighted green below) from the SATA backplane(s).
    - View of the cables is partially obstructed by other nearby cables.
    - The white clip needs to be held away from the connector while unplugging the power cable.

![2.5" drive cage cabling & screws](./img/sata-backplane-cabling.webp)

3. Unscrew the four screws holding the drive cage onto the chassis, then remove the drive cage from the chassis.
    - The top four screws are for the top drive cage; the bottom four screws are for the bottom drive cage.

![2.5" drive cage cabling & screws](./img/25-cage-screws.webp)

4. Unscrew the four SATA backplane screws from the drive cage, then push the SATA backplane out through the front of the drive cage.

![SATA backplane screws](./img/sata-backplane-screws.webp)

5. Place the new SATA backplane into the drive cage and secure it with the four SATA backplane screws, then reinstall the drive cage.
6. Plug the 4-pin Berg power connector and SATA data cables into the SATA backplane.
    - The order of the SATA data cables shouldn't matter as long as your operating system and software is configured to address disks by UUID (e.g. `/dev/disk/by-id/...`) instead of by letter (e.g. `/dev/sd_`).
    - By default, the ports connect as follows:
        - Top SATA backplane (top row of motherboard ports): `DATA0` connects to motherboard port 1. `DATA1` connects to motherboard port 0.
        - Bottom SATA backplane (bottom row of motherboard ports): `DATA0` connects to motherboard port 3. `DATA1` connects to motherboard port 2.
    - The motherboard's SATA ports can be accessed from behind via the cabling cutout. In the below photo, the [GPU brace](#removing-the-gpu-brace), [CPU duct](#removing-the-cpu-duct), and [GPU](#replacing-a-gpu) have been removed to show the ports from the front.

![Motherboard SATA ports](./img/motherboard-sata-ports.webp)

7. Reinstall the side fan mount, any 2.5" drives that were removed, the 2.5" drive cage cover(s), and the top case.

## Replacing the top I/O:

Thelio Mega R4-N3 includes a top I/O module providing audio and USB ports. If the top ports are damanged or become defective, they can be replaced using the steps below.

**Part numbers:**
- The top I/O module's part number is `MYS7523 Rev. 4.0`.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the top I/O:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the CPU duct](#removing-the-cpu-duct), and [remove the side fan mount](#removing-the-side-fan-mount).
2. Unplug the `F_AUDIO` header at the bottom-left corner of the motherboard, highlighted cyan below.

![Top I/O audio and USB 3.0 headers](./img/top-io-headers-bottom.webp)

3. Unplug the `F_U32_1` header near the bottom-right corner of the motherboard, highlighted red above.
4. Unplug the  `F_U320G` header near the right side of the motherboard just above the graphics card and M.2 heatsink, highlighted green below.

![Top I/O USB 2.0 header](./img/top-io-headers-middle.webp)

5. Unscrew the two front screws holding the top I/O board onto the chassis.

![Top I/O screws](./img/top-io-screws.webp)

6. Remove the top I/O board from the system.
7. Insert the new top I/O board into the system and screw it into place.
8. Reconnect the audio and USB headers.
9. Replace the side fan mount, CPU shroud, and top case.

## Troubleshooting the power button:

If the front power button doesn't power the machine on or doesn't light up when the system is powered on, try the following troubleshooting steps:

1. Ensure the system powers on normally using the internal power button.
2. Reseat the front power button to ensure it's making proper contact.
3. Check the wiring for the front power button.
4. Replace the front power button, if necessary.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to power the machine on using the internal power button:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Ensure the system is plugged into power, and the power supply switch is in the 1 (On) position.
3. Push the small button labeled `POWER` on the Thelio Io board.

![Internal power button](./img/thelio-io-power-button.webp)

4. If the Thelio Io `POWER` button powers the machine on, then the issue is either the front power button or its connection to the Thelio Io board. [Check the front power button wiring](#steps-to-check-the-front-power-button-wiring).
5. If the Thelio Io `POWER` button does not work, press the power (`⏻`) button near the top right of the motherboard.
    - The [CPU duct](#removing-the-cpu-duct) has been removed in the below photo for better visibility, but does not need to be removed to reach the motherboard power (`⏻`) button.

![Motherboard power button](./img/motherboard-power-button.webp)

6. If the motherboard power (`⏻`) button works, but the Thelio Io `POWER` button does not work, then the issue is either the Thelio Io board or its connection to the motherboard. [Check the wiring between the Thelio Io board and the motherboard](#thelio-io-wiring-guide).
7. If the motherboard power (`⏻`) button does not work, then the issue may be the motherboard, or it may be the power supply or its connection to the motherboard. Ensure all connectors are plugged in properly and that the power supply is switched to the 1 (On) position.

### Steps to check the front power button wiring:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
    - You can optionally [remove the CPU duct](#removing-the-cpu-duct) for easier access to the power button receptacle and its wiring.
2. On the back of the power button, the four pins should be connected to the four-wire connector as follows:

![Power button wiring](./img/power-button-wiring.jpg)

3. On the front power button receptacle, the four-pin connector should have the red wire on the left and the black wire on the right.

![Power button receptacle](./img/power-button-receptacle.webp)

4. The front power button receptacle should plug into the PFP1 port on the Thelio Io board, with the red wire on the top (see the [Thelio Io wiring guide](#thelio-io-wiring-guide)).

### Steps to replace the power button:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Follow the instructions in the [Replace the Thelio Power Button](https://support.system76.com/articles/thelio-power-button/) support article.

