# Thelio Major (Parts & Repairs)

Many components in your Thelio Major can be upgraded or replaced as necessary. This page uses photos of the the R5-N3 revision, which indicates:

- **R5:** The fifth AMD motherboard used in Thelio Major.
- **N3:** Based on the third revision of the nebula49 chassis.

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
- [Replacing the SATA backplanes](#replacing-the-sata-backplanes)
- [Replacing the top I/O](#replacing-the-top-io)
- [Troubleshooting the power button](#troubleshooting-the-power-button)

## Replacing the front accent strip:

Thelio Major includes a customizable accent panel on the front of the case, which can be swapped to change the case's look and feel. The instructions for swapping the accent are also available in [video form](https://system76.com/r/diyaccentpanel).

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

1. Remove the four outer screws holding the top case onto the machine.

![Top case screws](./img/top-case-screws.webp)

2. Slide the top case up and off of the machine.

## Adding/removing 2.5" storage drives:

Thelio Major R5-N3 supports up to four 2.5" SATA III drives.

**Tools required:** Cross-head (Phillips) screwdriver   
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to add/remove 2.5" storage drives:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unscrew the two screws securing the drive bay's cover.
    - There are two drive bays on the front edge of the machine (one at the top, and one at the bottom).

![2.5" drive cover (top)](./img/25-slot-cover-top.webp)
![2.5" drive cover (bottom)](./img/25-slot-cover-bottom.webp)

3. If you are adding a new drive, pop out the black plastic ring on the top crossbar and slide out four screws (per drive).

![2.5" drive screws](./img/25-drive-screws.webp)

4. Insert four screws into each 2.5" storage drive you wish to install.
5. Slide each 2.5" drive into one of the slots leading to the Thelio-IO board.

![2.5" drive installation](./img/25-drive-installation.webp)  

![Installed 2.5" drive](./img/25-drive-installed.webp)

6. Replace the black plastic screw ring and the 2.5" drive bay cover.

## Removing the side brace:

The side brace provides a mounting point for the GPU brace finger(s), which help keep GPUs or other PCI Express cards in place during shipping. It also provides mounting points for up to two 120mm fans; one 120mm fan is offered as an optional add-on during factory configuration.

One or two GPU brace fingers may be installed by default, depending on the GPU model that shipped with the system. The GPU brace finger(s) are only required during shipping. The system can be run without this part if it does not fit an upgraded GPU.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the side brace:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Unscrew the four screws holding the side bracket in place (two on the front of the case, two on the back.)
    - Take note of which screw holes the side brace is screwed into, which varies by GPU. In the below photos, the second-to-innermost set of screw holes is used.

![Side brace screws](./img/side-brace-screws.webp)

3. Pull the side brace out of the chassis. Unplug the side fan connector from the splitter board on the right side, if connected.

![Side fan splitter](./img/side-fan-splitter.webp)

### Steps to replace the optional side fan:

1. Unplug the fan from the front of the splitter board on the right side of the brace (highlighted cyan below), then free the cable from the velcro loop (highlighted yellow).

![Side fan connector](./img/side-fan-connector.webp)

2. Unscrew the four screws holding the fan onto the side brace from the back.

![Side fan screws](./img/side-fan-screws.webp)

3. When reinstalling the fan, the spinning side should face out of the chassis. The fan cable should be oriented towards the top-right, then secured with the velcro loop before reaching the splitter board.

### Steps to adjust the GPU brace finger:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side brace](#steps-to-remove-the-side-brace), and [remove the side fan](#steps-to-replace-the-optional-side-fan) (if installed over one of the brace fingers).
2. To adjust a GPU brace finger's horizontal position, unscrew its four corner screws (highlighted green below), move the GPU brace finger's mounting bar, and reattach it in the desired position.
    - Any vertical alignment screws overlapping the side brace (such as the ones highlighted cyan below) will also need to be removed.
    - All screws highlighted below have flat heads to avoid interfering with the side fan.

![GPU brace finger screws, back](./img/gpu-brace-finger-screws-back.webp)

3. To adjust the GPU brace finger's vertical position, unscrew the three vertical adjustment screws, move the GPU brace finger, and reattach it in the desired position.
    - The center screws (highlighted cyan) have flat heads to avoid interfering with the side fan.
    - The side screws (highlighted yellow) have round heads.

![GPU brace finger screws, side](./img/gpu-brace-finger-screws-side.webp)

## Replacing the bottom case fan:

Thelio Major R5-N3 has one case-mounted intake fan on the bottom of the chassis.

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
    - The cable runs along the inner corner of the case.
    - The slack is secured by a dedicated velcro loop (highlighted green below), then the cable passes through the velcro loop closest to the Thelio Io board (highlighted yellow).

![Bottom case fan cable management](./img/bottom-fan-cable.webp)

## Removing the CPU duct:

The CPU duct guides airflow through the CPU cooler. It covers the CPU and partially obstructs the RAM slots and top PCIe slot.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the CPU duct:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the side brace](#removing-the-side-brace).
2. Unplug the two fan connectors (highlighted yellow below) from the left splitter board in the front corner of the machine.
    - The splitter board provides the same signal to both ports, so it doesn't matter which port each cable is plugged into. By default, the braided cable is on top.
    - The non-braided Y cable can be left plugged in if you're not removing the CPU cooler-mounted fans.

![CPU fan connectors](./img/cpu-fan-connectors.webp)

3. Unscrew the four back thumbscrews and two top crossbar screws holding the CPU duct in place.

![CPU duct thumbscrews (back)](./img/cpu-duct-screws-back.webp)

![CPU duct screws (top crossbar)](./img/cpu-duct-screws-top.webp)

4. Pull the CPU duct away from the machine.

## Replacing the GPU:

Thelio Major ships with one dedicated GPU in the PCIe 5.0 x16 slot (top slot). GPUs greater than three slots tall may obstruct the lower PCIe slots.

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
6. Once the GPU is installed, replace the back PCIe bracket, CPU shroud (if necessary), side brace, and top case.
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
2. Lift the CMOS battery against the spring at the top of the slot by prying from behind the opening at the bottom of the slot.
    - A flat plastic tool can be used to aid lifting the battery.

![CMOS battery](./img/cmos-battery.webp)

3. Pull the CMOS battery out of its slot.
4. If you are resetting the CMOS, hold down the [internal power button](#steps-to-power-the-machine-on-using-the-internal-power-button) for 10 seconds to discharge any residual energy in the system.
5. Replace the CMOS battery starting with the left side of the slot (opposite from the clip).
    - The positive side of the battery (with text) should face outward.
6. Replace the GPU, side brace, and top case.

## Replacing the M.2 drives:

Thelio Major R5-N3 has four M.2 storage slots. All four slots are M-key and size 2280.

- Slots A, B, and C (the left three slots) support PCIe NVMe Gen 5.
- Slot D (the right slot) supports PCIe NVMe Gen 4.

Factory configurations only offer up to two M.2 SSDs (so at least two slots will be vacant by default).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the CPU duct](#removing-the-cpu-duct), and [remove the GPU](#replacing-the-gpu).
    - Removing the GPU is optional to access the bottom two slots (Slots A and D).
2. Remove the M.2 heatsink for the slot(s) you wish to access by pushing the semi-circular latch downward.
    - The latch for the bottom heatsink will also release the M.2 drive from Slot D, if installed.

![M.2 heatsink latches](./img/m2-heatsink-latches.webp)

3. To remove a drive from a slot, push the corresponding circular lever downwards to release it, then pull it out of the slot.

![M.2 slots](./img/m2-slots.webp)

4. To insert a drive into a slot, insert the connector, then push the opposite side down onto the circular tab until it clicks into place.
    - For Slot D, be sure the drive clicks completely into the semi-circular tab-- the tab has notches for both the drive and the heatsink.
5. Replace the M.2 heatsink(s).
    - If you're using a slot for the first time, peel the protective plastic off of the corresponding thermal tape on the heatsink.
        - In the below photo, the protective plastic has not yet been removed from the top strip of thermal tape.

![M.2 thermal tape](./img/m2-thermal-tape.webp)

6. Replace the GPU, CPU duct, side brace, and top case as applicable.

## Replacing the CPU fans:

Thelio Major R5-N3 contains three 120mm CPU fans. The back fan is mounted on the CPU duct. The second and third fans are mounted on the front and back of the CPU heatsink.

**Part numbers:**
- The back (duct-mounted) CPU fan is a Be Quiet! Silent Wings 4 (`BQ SIW4-12025-MF-PWM`).
- The middle and front (heatsink-mounted) CPU fans are Arctic Freezer 4U fans.
    - The heatsink-mounted fans are produced for the Arctic Freezer 4U-M CPU cooler, and it may not be possible to source them separately.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the duct-mounted CPU fan:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the CPU duct](#removing-the-cpu-duct).
3. Unscrew the four screws (two on each side) holding the fan bracket onto the duct.
    - Depending on your screwdriver, removing the bracket from the duct may not be required, but it makes removal and installation of the fan much easier.

![CPU duct fan bracket screws](./img/cpu-duct-fan-bracket-screws.webp)

4. Unscrew the four screws attaching the bracket to the fan.

![CPU duct fan screws](./img/cpu-duct-fan-screws.webp)

5. When reinstalling the fan into the CPU duct:
    - The spinning side should face inward (towards the front of the chassis).
    - When viewing the fan from the back of the computer (once the shroud is reinstalled), the cable should point up and to the right, and the label on the fan should be facing left.
    - Overtightening the fan bracket's screws may cause fan noise; if the fan is creating excessive noise, try slightly loosening some of the screws.

### Steps to replace the heatsink-mounted CPU fans:

1. Follow the steps above to [remove the top case](#removing-the-top-case) and [remove the CPU duct](#removing-the-cpu-duct).
    - You can optionally [remove the side brace](#removing-the-side-brace) and [remove the GPU](#replacing-the-gpu) for easier access.
2. Disconnect the rear cooler fan from the front cooler fan's Y-cable, and unplug the front cooler fan's Y-cable from the splitter board (if it wasn't already unplugged while [removing the CPU duct](#removing-the-cpu-duct)).
    - The heatsink fan cable connection points are highlighted red below.

![CPU heatsink fans & connectors](./img/cpu-heatsink-fans-installed.webp)

3. Pull the fans (highlighted green above) directly out of the case, sliding them off the heatsink.

![CPU heatsink fans (removed)](./img/cpu-heatsink-fans-removed.webp)

4. When reinstalling the CPU heatsink fans, the fan with a normal cable goes on the back of the heatsink, while the fan with a Y-cable goes on the front.

## Replacing the CPU cooler and CPU:

The CPU cooler dissipates heat from the CPU to the heatsink, where the CPU fans expel it from the system. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU and the cooler/heatsink may help the system run cooler.

**Part numbers:**
- The CPU cooler is an [Arctic Freezer 4U-M](https://www.arctic.de/us/Freezer-4U-M/ACFRE00133A).
- The CPU uses an AMD sTR5 socket.

**Tools required:** Cross-head (Phillips) screwdriver, AMD Threadripper torque tool or compatible 1.5 Nm (13.275 in-lb) torque 3.95mm six-point star (Torx 20) screwdriver, thermal paste  
**Time estimate:** 45 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to remove the CPU cooler/thermal paste:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side brace](#removing-the-side-brace), [remove the CPU duct](#removing-the-cpu-duct), [remove the GPU](#replacing-the-gpu), and [remove the heatsink-mounted CPU fans](#steps-to-replace-the-heatsink-mounted-cpu-fans).
2. While holding the CPU cooler in place so it doesn't fall, loosen the screws to the left and right of the CPU cooler.
    - The two screws on the left side use the outer holes.
    - The two screws on the right side use the inner holes.

![CPU cooler screws](./img/cpu-cooler-screws.webp)

3. Lower the cooler away from the CPU.
4. Using a paper towel, clean the existing thermal paste off of the heatsink and CPU.
    - Due to the design of the heatsink, some thermal paste may remain between the heatsink pipes. Only the flat section of the pipes that makes contact with the CPU needs to be cleaned.
    - You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

### Steps to replace the CPU:

1. Place the computer on its side so the motherboard is facing up.
2. Using the AMD Threadripper torque screwdriver (or a compatible T20 screwdriver), loosen the three CPU bracket Torx screws in reverse order of the printed numbers (starting with #3).
    - The screws are held captive and will not come out of the bracket.

![CPU Torx screws](./img/cpu-bracket-screws.webp)

3. The CPU bracket cover will spring up when all screws are fully loosened.
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
    - If you're using a screwdriver without a torque tool, try to tighten all three screws evenly. After re-assembling the computer, [run a RAM test](https://support.system76.com/articles/hardware-failure#memory) to ensure the CPU is secured with the correct amount of force.

### Steps to install the thermal paste/CPU cooler:

1. Draw an `X` shape of thermal paste onto the CPU.

![Thermal paste application](./img/thermal-paste-application.webp)

2. Place the CPU cooler onto the CPU; while holding it in place, screw its vertical mounting bar into the horizontal mounting brackets.
    - The cooler should be oriented so the Thermalright logos are on the bottom.
    - Insert each screw partially, then finish tightening both.
3. Set the computer upright, then reinstall the cooler-mounted CPU fan, CPU duct, GPU, side brace, and top case.

## Replacing the RAM:

Thelio Major R5-N3 supports up to 512GB (4x128GB) of RAM. The RAM sticks are DDR5 ECC DIMMs running at a speed of 5600 MHz.

If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the RAM:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the CPU duct](#removing-the-cpu-duct), and [remove the CPU cooler](#steps-to-remove-the-cpu-coolerthermal-paste).
    - Removing the CPU cooler is optional, but is recommended to provide easier access to the RAM slots.
    - Replacing the thermal paste is recommended if the CPU cooler is removed.
2. To remove an existing RAM stick, flip the left and right latches away from the stick, then pull the stick out of the slot.

![RAM slots](./img/ram-slots.webp)

3. Make sure the tabs on the left and right of the slot are open (pulled away from the slot), then insert the new RAM (or re-seat the existing RAM) into the slot.
    - The RAM stick will only fit in one direction. The larger group of pins goes on the left.
    - Use the following guide for placement of the RAM sticks:
    ![RAM slot order](./img/ram-order.webp)
4. Replace the top case.

## Replacing the power supply:

The power supply unit (PSU) can be replaced with another unit of the same model.

**Part numbers:**
- The default PSU in units shipped after July 2024 is the [XPG Core Reactor II (1000W)](https://www.xpg.com/us/xpg/pc-components-core-reactor-ii).
- The default PSU in older units is the [Be Quiet! Pure Power 12 M 1000W (L12-M-1000W)](https://www.bequiet.com/en/powersupply/4161).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 45 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the power supply:

1. Follow the steps above to [remove the top case](#removing-the-top-case), [remove the side brace](#removing-the-side-brace), and [unplug the GPU (if installed)](#replacing-the-gpu).
2. Unscrew and remove the PSU bracket.
    - One screw is located on the opposite side of the case.

![Power supply bracket screw (left)](./img/psu-bracket-screw-left.webp)
![Power supply bracket screw (right)](./img/psu-bracket-screw-right.webp)

4. Unscrew the power supply's four screws from the back of the chassis.

![Power supply screws](./img/psu-screws.webp)

5. Unplug all of the modular cabling from the back of the PSU.

![PSU cabling](./img/psu-cables.webp)

6. Remove/replace the power supply.
    - The replacement PSU should be installed with the fan facing the bottom of the case.
    - Place the PSU on the rubber post and hold it against the screwholes in the back of the case while attaching it.

![PSU post](./img/psu-post.webp)

7. Connect the power cables to the new power supply and GPU (if installed), then reinstall the PSU brace, side brace, and top case.

## Replacing the Thelio Io board:

Named after Jupiter's moon Io, the Thelio Io daughterboard handles the front power button and fan control. If the Thelio Io board becomes defective, it can be replaced using the instructions below.

**Part numbers:**
- Thelio Major R5-N3 uses [Thelio Io version 2](https://github.com/system76/thelio-io/tree/92c2a60b6d6acc0f9d51d819cba07ad28e2b03f3) ([PCB revision thelio_io_2.3](https://github.com/system76/thelio-io-hardware/tree/91814370002f762ac01cd1dd99dcbb43336352ab/pcb-thelio-io)).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the Thelio Io board:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
    - The [CPU duct](#removing-the-cpu-duct) and [side brace](#removing-the-side-brace) can optionally be removed to provide easier access to the cabling.
2. Use the cutout on the front of the chassis to unplug all cabling from the Thelio Io board.
    - The second-from-top connector (`POWER1`) requires pulling the white tab while unplugging.
    - The bottommost connector (`USB`) requires holding the black tab while unplugging.

![Thelio Io cabling cutout](./img/thelio-io-cabling-cutout.webp)

3. Unscrew the two screws holding the daughterboard on from the right side of the chassis.

![Thelio Io drive cage screws](./img/thelio-io-screws.webp)

4. Screw in the new Thelio Io board and reconnect the wiring.

### Thelio Io wiring guide:

![Thelio Io wiring guide](./img/thelio-io-board.webp)

1. When wiring the Thelio Io board, refer to the port labels and the following guide.
    - `FANOUT1`/`CPU FAN` - to the fan splitter closest to the [CPU fans](#replacing-the-cpu-fans).
    - `FANOUT4`/`AUX FAN` - to the auxiliary fan splitter (next to the [CPU fan splitter](#replacing-the-cpu-fans)).
    - `FANOUT2`/`INTAKE FAN` - to the [bottom case fan](#replacing-the-bottom-case-fan).
    - `FANOUT3`/`GPU FAN` - to the [side brace](#removing-the-side-brace) fan splitter.
        - May be disconnected by default if no side fan (GPU cooling intake fan) is ordered as factory configuration.
    - `FANIN1`/`MOTHERBOARD FAN INPUT` - to the `CPU_FAN` header on the right side of the motherboard (behind the CPU shroud), highlighted cyan below.
    
    ![Motherboard CPU output header](./img/motherboard-fan-header.webp)
    - `POWER1`/`POWER INPUT` - to the [power supply](#replacing-the-power-supply) (via 4-pin Molex connector).
        - The white plastic clip needs to be held away from the connector to unplug this cable from the Thelio Io board.
    - `PFP1`/`FRONT PANEL` - to the [power button receptacle](#troubleshooting-the-power-button) on the front panel.
        - On the Thelio Io board, the wire color order (from top to bottom) is red, black, blue, black.
        - On the power button receptacle, the wire color order (from left to right) is red, black, blue, black.
    - `PMB1`/`MOTHERBOARD` - to the first four pins of the `F_PANEL` header at the bottom right of the motherboard, highlighted green below.
        - On the Thelio Io board, the wire color order (from top to bottom) is red, black, blue, black.
        - On the motherboard, the wire color order (from left to right) is red, black, blue, black.
    - `USB` - to the `F_USB1` header on the bottom edge of the motherboard, highlighted yellow below.
        - A small clip needs to be held down to unplug this cable from the Thelio Io board.
        
    ![Motherboard power button & USB headers](./img/motherboard-power-usb.webp)

## Replacing the SATA backplanes:

The SATA backplanes provide four 2.5" SATA data and power connectors (two per backplane) for the [2.5" drive cage](#addingremoving-25-storage-drives).

**Part numbers:**
- The part number and version for the SATA backplane is [thelio-io-sata_2.2](https://github.com/system76/thelio-io-hardware/tree/91814370002f762ac01cd1dd99dcbb43336352ab/pcb-thelio-io-sata).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the SATA backplane:

1. Follow the steps above to [remove the top case](#removing-the-top-case), then [remove the 2.5" drive cage cover and all 2.5" SATA drives](#addingremoving-25-storage-drives) in front of the backplane you are replacing.
    - The [CPU duct](#removing-the-cpu-duct), [side brace](#removing-the-side-brace), and [GPU](#replacing-the-gpu) can optionally be removed to provide easier access to the cabling.
2. Use the cutouts on the front right corner of the chassis to unplug the 4-pin Berg power connector (highlighted cyan below) and the two SATA data cables (highlighted green below) from the SATA backplane you're replacing.

![2.5" drive cage cabling & screws](./img/sata-backplane-cabling.webp)

3. Unscrew the four screws holding the drive cage onto the chassis (highlighted red above), then remove the drive cage from the chassis.
    - The top drive cage contains an additional bracket to adapt the screw placement to the chassis, which does not need to be removed.
4. Unscrew the four SATA backplane screws from the drive cage, then push the SATA backplane out through the front of the drive cage.

![SATA backplane screws](./img/sata-backplane-screws.webp)

5. Place the new SATA backplane into the drive cage and secure it with the four SATA backplane screws, then reinstall the drive cage.
6. Plug the 4-pin Berg power connector and SATA data cables into the SATA backplane.
    - The order of the SATA data cables shouldn't matter as long as your operating system and software is configured to address disks by UUID (e.g. `/dev/disk/by-id/...`) instead of by letter (e.g. `/dev/sd_`).
    - By default, the ports connect as follows:
        - Top board `DATA0` connects to motherboard `SATA3 0` (front).
        - Top board `DATA1` connects to motherboard `SATA3 1` (back).
        - Bottom board `DATA0` connects to motherboard `SATA3 2` (front).
        - Bottom board `DATA1` connects to motherboard `SATA3 3` (back).

![Motherboard SATA ports](./img/motherboard-sata-ports.webp)

7. Reinstall the GPU, side brace, and CPU shroud (if necessary), along with any 2.5" drives that were removed, the 2.5" drive cage cover(s), and the top case.

## Replacing the top I/O:

Thelio Major R5-N3 includes a top I/O module providing audio and USB ports. If the top ports are damanged or become defective, they can be replaced using the steps below.

**Part numbers:**
- The top I/O module's part number is `MYS7523 Rev. 4.0`.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the top I/O:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
    - You can optionally [remove the CPU duct](#removing-the-cpu-duct) and [remove the side brace](#removing-the-side-brace) for easier access to the wiring. Depending on the size of your GPU, you may also need to [remove the GPU](#replacing-the-gpu).
2. Unplug the `F_AUDIO` header at the bottom-left corner of the motherboard.

![Top I/O audio header](./img/top-io-headers-audio.webp)

3. Unplug the `F_U32OG` header (highlighted green below) and `F_U32` header (highlighted cyan below) on the right side of the motherboard.

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
2. On the back of the power button, the four pins should be connected to the four-wire connector as follows:

![Power button wiring](./img/power-button-wiring.jpg)

3. On the front power button receptacle, the four-pin connector should have the red wire on the left and the black wire on the right (when viewed from the back of the computer.)
    - If necessary, you can [remove the top 2.5" drive cage](#replacing-the-sata-backplanes) for easier access to the power button receptacle's connector.

![Power button receptacle](./img/power-button-receptacle.webp)

4. The front power button receptacle should plug into the `PFP1` port on the Thelio Io board, with the red wire on the top (see the [Thelio Io wiring guide](#thelio-io-wiring-guide).)

### Steps to replace the power button:

1. Follow the steps above to [remove the top case](#removing-the-top-case).
2. Follow the instructions in the [Replace the Thelio Power Button](https://support.system76.com/articles/thelio-power-button/) support article.
