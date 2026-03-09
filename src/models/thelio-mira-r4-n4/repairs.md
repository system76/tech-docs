# Thelio Mira (Parts & Repairs)

Many components in your Thelio Mira can be upgraded or replaced as necessary. This page uses photos of the the R4-N4 revision, which indicates:

- **R4:** The fourth AMD motherboard used in Thelio Mira.
- **N4:** Based on the fourth revision of the nebula40 chassis.

Minor case details may vary based on the production date of the unit, but screw counts, general component locations, and other details should remain the same unless otherwise noted.

Power the machine off, switch off the power supply, and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Removing the protective plastic](#removing-the-protective-plastic)
- [Removing the side panels](#removing-the-side-panels)
- [Removing the front glass](#removing-the-front-glass)
- [Removing the top shell](#removing-the-top-shell)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing the GPU](#replacing-the-gpu)
- [Replacing the M.2 drives](#replacing-the-m2-drives)
- [Clearing the CMOS](#clearing-the-cmos)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the WiFi/Bluetooth card](#replacing-the-wireless-card)
- [Accessing spare 2.5" drive screws](#accessing-spare-25-drive-screws)
- [Adding/removing 2.5" storage drives](#addingremoving-25-storage-drives)
- [Replacing the included 2.5“ backplane](#replacing-the-included-25-backplane)
- [Installing an additional 2.5" or 3.5" bay](#installing-an-additional-25-or-35-bay)
- [Replacing the power supply](#replacing-the-power-supply)
- [Cleaning the side dust filter](#cleaning-the-side-dust-filter)
- [Replacing the side fans](#replacing-the-side-fans)
- [Cleaning the bottom dust filter](#cleaning-the-bottom-dust-filter)
- [Replacing the bottom fans](#replacing-the-bottom-fans)
- [Replacing the CPU cooler/thermal paste and CPU](#replacing-the-cpu-cooler-and-cpu)
- [Replacing the Thelio Io board](#replacing-the-thelio-io-board)
- [Replacing the front I/O](#replacing-the-front-io)
- [Replacing the power button](#replacing-the-power-button)

## Removing the protective plastic:

Thelio Mira's glass front panel comes with a protective plastic sheet on the front.

**Tools required:** None  
**Time estimate:** 30 seconds  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the protective plastic:

1. Pull the protective plastic off the front of the computer.

![Protective plastic removal](./img/protective-plastic-removal.webp)

## Removing the side panels:

The side panels can be removed to access the internal components.

- The left side panel (with a mesh window) covers the motherboard, RAM, and PCI Express cards.
- The right side panel (without a window) covers the power supply, Thelio Io board, and front I/O.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 2 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the left side panel:

1. Remove the two back thumbscrews holding the side panel onto the machine.
    - The left side panel's screws are on the right when viewed from the back of the machine.

![Left side panel screws](./img/side-panel-left-screws.webp)

2. Starting from the tab at the upper back, pull the side panel off of the machine.

![Left side panel removal](./img/side-panel-left-removal.webp)

### Steps to remove the right side panel:

1. Remove the two back thumbscrews holding the side panel onto the machine.
    - The right side panel's screws are on the left when viewed from the back of the machine.

![Right side panel screws](./img/side-panel-right-screws.webp)

2. Starting from the tab at the upper back, pull the side panel off of the machine.

![Right side panel removal](./img/side-panel-right-removal.webp)

## Removing the front glass:

The front glass panel can be removed to access the screws and velcro cutouts underneath.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 4 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the front glass:

1. Follow the steps above to [remove the left and right side panels](#removing-the-side-panels).
2. Unscrew the bracket screw behind the top left of the front glass (at the top right when looking from the left side).

![Front glass bracket screw](./img/front-glass-screw.webp)

3. Pull the front glass off from the cutouts at the top.

![Front glass removal](./img/front-glass-removal.webp)

## Removing the top shell:

The top shell of the chassis can be removed to access the 2.5" drive screws.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 6 minutes  
**Difficulty:** Easy <span style="color:green;">●</span> 

### Steps to remove the top:

1. Follow the steps above to [remove the left and right side panels](#removing-the-side-panels) and [remove the front glass](#removing-the-front-glass).
2. Unscrew the four screws (two on the front, and two on the back) holding the top of the chassis on.

![Top chassis screws](./img/top-screws.webp)

3. Pull the top shell off of the chassis.
    - When reinstalling the top shell, ensure the ventilation cutouts are aligned with the heatsink underneath.

## Replacing the RAM:

Thelio Mira B4-N4 supports up to 192GB (4x48GB) of DDR5 (non-ECC) RAM.

- With up to 64GB of RAM, the RAM runs at a speed of 5600 MHz.
- 96GB (2x48GB) of RAM runs at 6400 MHz.
- 128GB and above (with four DIMMs) runs at 3200 MHz.
- Greater RAM amounts and speeds may be possible with aftermarket upgrades and overclocking, but are not tested or guaranteed.

If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the RAM:

1. Follow the steps above to [remove the left side panel](#removing-the-side-panels).
2. To remove an existing RAM stick, flip the top and bottom latches away from the stick, then pull the stick out of the slot.

![RAM slots](./img/ram-slots.webp)

3. Make sure the tabs on the top and bottom of the slot are open (pulled away from the slot), then insert the new RAM (or re-seat the existing RAM) into the slot.
    - The RAM stick will only fit in one direction. The larger group of pins goes on top.
    - Push near the top and bottom of the RAM stick until both tabs click shut.
    - Use the following guide for placement of the RAM sticks:
    ![RAM slot order](./img/ram-order.webp)
4. Replace the left side panel.

## Replacing the GPU:

Thelio Mira ships with an optional dedicated GPU in the PCIe 5.0 x16 slot (top slot). GPUs greater than three slots tall will obstruct the bottom PCIe slot.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the GPU:

1. Follow the steps above to [remove the left side panel](#removing-the-side-panels) and [remove the front glass](#removing-the-front-glass).
2. Remove the four screws (two in the front, and two in the back) holding the GPU brace into the chassis.

![GPU brace screws](./img/gpu-brace-screws.webp)

3. Slide the GPU brace out of the chassis.
    - Start by pivoting the top edge out of the chassis, then slide the bottom edge inward and upward until it can be removed from the chassis.
4. Unplug any power cables connected to the GPU.

![GPU power connection](./img/gpu-power.webp)

3. Partially loosen the two back screws holding the PCIe bracket in place, and slide it into the rightmost position.

![PCIe bracket screws](./img/pcie-bracket.webp)

4. While holding the GPU, push back the latch on the motherboard (accessible from above the GPU) to free the PCIe connection, then pull the card out of the slot.

![PCIe slots & latches](./img/pcie-slots.webp)

5. Insert the new GPU (or re-seat the existing GPU) into the top PCIe slot.
6. Close the back PCIe bracket.
7. Connect the GPU power cable.
8. If necessary, adjust the position of the GPU brace fingers.
    - To adjust the height of the GPU brace fingers, partially loosen each finger's singular screw (highlighted cyan below) from the back, slide the finger to the appropriate height, and re-tighten the screw.
    - To adjust the horizontal position of the brace fingers, use the screws at the top and bottom of the brace columns (highlighted red below).
    ![GPU brace adjustment](./img/gpu-brace-adjustment.webp)
9. Reinstall the GPU brace, front glass, and left side panel.

## Replacing the M.2 drives:

Thelio Mira R4-N4 has three M.2 storage slots. All three slots are M-key and size 2280.

- Slot 1 supports PCIe NVMe Gen 5.
- Slot 2 supports PCIe NVMe Gen 4.
    - If this slot is occupied, the bottom PCIe slot will be disabled.
- Slot 3 supports PCIe NVMe Gen 4 and SATA III.
    - If either of the top 2.5" SATA connectors are populated, then this slot will be limited to PCIe NVMe Gen 3 speeds. The top two 2.5" SATA connectors are not used by default in Thelio Mira R4-N4.

Factory configurations only offer up to two M.2 SSDs (so at least one slot will be vacant by default).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the left side panel](#removing-the-side-panels), and remove additional parts depending on the slot(s) you're accessing.
    - Slot 1: No other components need to be removed.
    - Slots 2 and 3: It's recommended (but not physically required) to [remove the front glass](#removing-the-front-glass) and [remove the GPU brace](#replacing-the-gpu) for easier access.
    - In the below photos, the GPU brace and GPU have been removed for greater visibility.
2. Remove the M.2 heatsink for the slot(s) you're accessing.
    - Slot 1: Slide the circle fastener to the left, pivot the heatsink underneath it slightly away from the motherboard, then fully remove the heatsink.
    - Slots 2 and 3: The heatsink screws are held captive, and will not come away from the heatsink when fully unscrewed.

![M.2 heatsink fasteners](./img/m2-heatsinks.webp)

3. To remove a drive from a slot, rotate the black circular lever counter-clockwise until it's not covering the drive. The drive will pop up to an angle, and can be removed from the slot.
    - Rotating the circular levers may not be necessary, as the drives can also be held in place solely by the heatsinks.

![M.2 slots](./img/m2-slots.webp)

4. To install a drive into a slot, insert the connector, then hold the opposite side against the motherboard while rotating the black circular lever clockwise to secure the drive.
5. Reinstall the M.2 heatsink(s).
    - If you're using a slot for the first time, peel the protective plastic off of the corresponding thermal tape on the heatsink.

![M.2 thermal tape](./img/m2-thermal-tape.webp)

6. Reinstall the GPU, GPU brace, front glass, and left side panel as applicable.

## Clearing the CMOS:

The CMOS can be cleared without removing the CMOS battery using a jumper.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to clear the CMOS:

1. Follow the steps above to [remove the left side panel](#removing-the-side-panels).
2. Use a conductive piece of metal (such as the screwdriver, if applicable) to bridge the two pins of the `CLRCMOS1` jumper at the bottom of the motherboard for at least three seconds.

![Clear CMOS jumper](./img/cmos-jumper.webp)

3. Reinstall the left side panel.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced. Removing the CMOS battery is also an alternative way to force a CMOS reset.

**Warning (ingestion hazard):** Keep batteries out of reach of children. Death or serious injury can occur if ingested. If a battery is suspected to be swallowed or inserted inside any part of the body, seek immediate medical attention. In the US, you can also call the National Battery Ingestion Hotline for guidance: [+1 (800) 498-8666](tel:18004988666)

**Part numbers:**
- The CMOS battery is a standard KTS CR2032 battery.

**Tools required:** Cross-head (Phillips) screwdriver, plastic flathead screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the left side panel](#removing-the-side-panels), [remove the front glass](#removing-the-front-glass), and [remove the GPU](#replacing-the-gpu).
2. Insert a small plastic flathead screwdriver (or similar plastic prying tool) into the clip on the right side, pulling the clip away from the battery and prying the battery away from the clip.

![CMOS battery](./img/cmos-battery.webp)

3. The CMOS battery will pop out of the slot when cleared of the retaining clip.
4. If you are resetting the CMOS, hold down the power button for 10 seconds to discharge any residual energy in the system.
5. Install the new CMOS battery (or reinstall the existing CMOS battery) starting at the right side of the slot.
    - The positive side of the battery (with text) should face outward.
6. Replace the GPU, front glass, and left side panel.

## Replacing the wireless card:

Your Thelio Mira’s WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with an E-key PCIe interface.

**Part numbers:**
- Default wireless card (varies based on supply):
    - MediaTek `MT7927`
    - MediaTek `MT7925`

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the wireless card:

1. Follow the steps above to [remove the left side panel](#removing-the-side-panels), [remove the front glass](#removing-the-front-glass), and [remove the GPU](#replacing-the-gpu).
2. Unscrew the wireless card's screw.

![Wireless card screw](./img/wireless-card-screw.webp)

3. Slide the black plastic cover to the left until it detatches from the wireless card.
    - It may be necessary to rotate the antenna wires to allow the cover to slide off of the card.
4. Gently unplug the two antenna wires connecting to the wireless card.

![Wireless card antennas](./img/wireless-card-antennas.webp)

5. Pull the left end of the wireless card away from the motherboard to free the card from the thermal pad underneath.
    - Use caution when pulling on the card, as it takes significant force to break the seal of the thermal pad, but the wireless card and/or its M.2 slot will break if the card raises to more than 30 degrees off the board.
6. Place the new wireless card into the slot at a 30-degree angle, then hold it down to the thermal pad while reinstalling the wireless card screw.
7. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place.
    - Use caution when attaching the connectors; the pins can bend, break, or snap.

## Accessing spare 2.5" drive screws:

Additional screws for 2.5" storage drives are stored under the top shell of the machine.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to access spare 2.5" drive screws:

1. Follow the steps above to [remove the left side panel](#removing-the-side-panels), [remove the front glass](#removing-the-front-glass), and [remove the top shell](#removing-the-top-shell).
2. Pop the plastic ring out of the diagonal crossbar.

![2.5" screws](./img/25-screws.webp)

3. Slide four screws (per drive) out of the crossbar's cutout.
4. Reinstall the plastic ring, top shell, front glass, and left side panel.

## Adding/removing 2.5" storage drives:

Thelio Mira B4-N4 supports up to two 2.5" SATA III drives.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to add/remove 2.5" storage drives:

1. Unscrew the backplate labeled `2.5" DRIVES`.

![2.5" drive cover](./img/25-cover.webp)

2. If screws for your drive aren't already installed in the 2.5" drive cage, follow the steps above to [remove the left side panel](#removing-the-side-panels), [remove the front glass](#removing-the-front-glass), [remove the top shell](#removing-the-top-shell), and [access the spare 2.5" drive screws](#accessing-spare-25-drive-screws).
3. Insert four screws into each 2.5" storage drive you wish to install.
4. Slide each 2.5" drive into one of the slots leading to the SATA backplane.
    - The larger group of pins goes on the top.

![2.5" drive installation](./img/25-drive-installation.webp)
![2.5" drive (installed)](./img/25-drive-installed.webp)

5. Replace the 2.5" drive bay cover.

## Replacing the included 2.5" backplane:

The backplane that connects 2.5" storage drives to the system upon insertion can be independently replaced using the steps below.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the included 2.5" backplane:

1. Follow the steps above to [remove the 2.5" backplate and any installed 2.5" storage drives](#addingremoving-25-storage-drives) and [remove the right side panel](#removing-the-side-panels).
2. Unplug the SATA and power connectors from the back of the 2.5" backplane.

![2.5" bay backplane](./img/25-backplane.webp)

3. Unscrew the four screws holding the 2.5" backplane into the 2.5" bay.
4. Remove the old backplane from the 2.5" bay by tilting it until it fits out the back of the bay.
    - Alternatively, push the backplane out the back of the computer.
5. Insert the new backplane into the 2.5" bay.
    - The backplane should be oriented so the port labels are upside-down.
6. Screw the new backplane into the 2.5" bay.
7. Plug the SATA and power connectors into the new backplane.
    - The order of the SATA data cables shouldn’t matter as long as your operating system and software is configured to address disks by UUID (e.g. `/dev/disk/by-id/...`) instead of by letter (e.g. `/dev/sd_`).
    - By default, the ports connect as follows:
        - `DATA0` (on the left) connects to `SATA3_A2` (on the left, farthest from the motherboard).
        - `DATA1` (on the right) connects to `SATA3_A1` (on the right, closest to the motherboard).
        - The 4-pin Berg adapter connects to a 4-pin Molex cable, which connects to the [power supply](#replacing-the-power-supply).

## Installing an additional 2.5" or 3.5" bay:

In addition to the included 2.5" bay, you can also install an additional 2.5" bay to add two additional 2.5" drive slots (for a total of four). Alternatively, you can install a 3.5" bay to add two 3.5" drive slots (in addition to the two included 2.5" drive slots).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to install an additional 2.5" bay:

1. Follow the steps above to [remove both side panels](#removing-the-side-panels) and [remove the front glass](#removing-the-front-glass); also remove the new 2.5" drive bay's cover (if installed).
2. If it's not already installed, insert the 2.5" drive backplane into the 2.5" drive cage, then screw it in from the back.
    - On the interior of the cage, the backplane's larger side gap should face towards the closed side of the cage.
    - On the exterior of the cage, the orientation of the backplane will cause the port labels to be upside-down when the cage is installed in the Thelio.

![2.5" drive cage backplane screws](./img/additional-25-backplane.webp)

3. Screw the 2.5" drive cage onto the front of the chassis.

![2.5" drive cage screws](./img/additional-25-cage-screws.webp)

4. Connect the backplane to the top two SATA ports on the motherboard, and to the power supply.
    - M.2 Slot 3 will be limited to PCIe NVMe Gen 3 speeds while either of the top SATA ports is connected.
    - The SATA ports are located behind the dedicated GPU (if installed), but can be accessed from behind using the cutout behind the right side panel.
5. If drive mounting screws weren't included with the additional 2.5" cage, [remove the top shell](#removing-the-top-shell) to [access the extra screws](#accessing-spare-25-drive-screws).
6. Install any desired drives in the 2.5" cage.
    - The drives should be oriented so the larger set of pins is on top.
7. Install the 2.5" cage's cover.

![Additional 2.5" drive cage cover](./img/additional-25-cover.webp)

### Steps to install an additional 3.5" bay:

1. Follow the steps above to [remove both side panels](#removing-the-side-panels) and [remove the front glass](#removing-the-front-glass).
2. Screw the 3.5" drive cage onto the front of the chassis.

![3.5" drive cage screws](./img/additional-35-cage-screws.webp)

3. If drive mounting screws weren't included with the 3.5" cage, [remove the top shell](#removing-the-top-shell) to [access the extra screws](#accessing-spare-25-drive-screws).
4. Install any desired drives in the 3.5" cage.
    - The drives should be oriented so the larger portion faces the front of the chassis.
5. After installing any desired drives in the 3.5" cage, install the 3.5" cage's cover.

![3.5" drive cage cover](./img/additional-35-cover.webp)

6. Connect any installed 3.5" drives to the top two SATA ports on the motherboard, and to the power supply.
    - M.2 Slot 3 will be limited to PCIe NVMe Gen 3 speeds while either of the top SATA ports is connected.
    - The SATA ports are located behind the dedicated GPU (if installed), but can be accessed from behind using the cutout behind the right side panel.

## Replacing the power supply:

Thelio Mira R4-N4 uses a standard SFX (small form-factor) power supply.

**Part numbers:**
- 1000W models:
    - Thermaltake `PS-STP-1000FNFAPU-1`
    - Lian Li `SP1000P.B`
    - ...or other equivalent
- 850W model (pictured below; not a standard configuration): Cooler Master `MPY-8501-SFHAGV`
- 750W model: Lian Li `SP750G.B` (or equivalent)

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 45 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the power supply:

1. Follow the steps above to [remove the right side panel](#removing-the-side-panels).
2. Unscrew the power supply's four screws from the back of the chassis.

![Power supply screws](./img/psu-screws.webp)

3. Unplug all of the modular cabling from the back of the PSU.

![PSU cabling](./img/psu-cables.webp)

4. Remove/replace the power supply.
    - The replacement PSU should be installed with the fan facing out of the case.
    - Place the PSU on the metal stand and hold it against the screwholes in the back of the case while attaching it.
5. Connect the power cables to the new power supply.
    - If the new PSU is not the same model as the old one, it's recommended to completely remove the old power cables and replace them with the cables that came with the new PSU.
6. Reinstall the right side panel.

## Cleaning the side dust filters:

The side intake fans are covered by individual dust filters, which can be removed for cleaning.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to clean the side dust filters:

1. Follow the steps above to [remove the left side panel](#removing-the-side-panels).
2. Unscrew the four screws holding the fan panel onto the side panel.
    - Do not unscrew any of the six sideways screws.

![Side fan panel screws](./img/side-fan-panel-screws.webp)

3. Unscrew the four screws (per fan) holding the dust filter and fan onto the panel.

![Side fan screws](./img/side-fan-screws.webp)

4. Pull the dust filters off of the panel.
    - If you're not replacing the fans, leave them in place under the panel to keep them in the correct orientation.
5. Clean dust out of the dust filter using compressed air or gentle running water.
    - If liquid is used to clean the dust filter, wait until the dust filter has completely dried before reinstalling it.
6. Reinstall each dust filter.
    - The glossy side of the dust filter should face away from the panel; the matte side should face towards the panel.
    - The curved/glossy side of the washer faces the screw head; the flat/matte side faces the dust filter.
    - From bottom to top, the order of components should be: fan, panel, dust filter, washer, screw.
7. Reattach the fan panel to the rest of the left side panel.
    - The pogo pins should be visible and nearest to the top of the panel.
8. Reinstall the left side panel.

## Replacing the side fans:

The two 120mm side intake fans can be individually replaced.

**Part numbers:**
- Side fans: Be Quiet! Silent Wings 4 120mm (`SIW4-12025-MF-PWM`)

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the side fans:

1. Follow the steps above to [remove the left side panel](#removing-the-left-side-panel) and [remove the side fan dust filters and screws](#cleaning-the-side-dust-filters).
2. Disconnect then fan(s) being replaced from the pogo pin fan splitter.
    - By default, the fan pictured on the left is plugged into the left connector of the splitter, and the fan pictured on the right is plugged into the right connector. However, both connectors provide the same signal.

![Side fan cables](./img/side-fan-cables.webp)

3. Unfasten the velcro strips and free the fan cables.
4. Pull each fan being replaced away from the panel, passing the end of the cable through the channel in the panel.
5. Place the new fan(s) under the panel.
    - With the panel oriented as shown above, both fans should be oriented so their cables point towards the top left.
    - The spinning side of the fan should face through the panel, while the stationary cover should face away from the panel.
5. Screw each fan into the panel along with its corresponding dust filter.
    - The glossy side of the dust filter should face away from the panel; the matte side should face towards the panel.
    - The curved/glossy side of the washer faces the screw head; the flat/matte side faces the dust filter.
    - From bottom to top, the order of components should be: fan, panel, dust filter, washer, screw.
7. Reattach the fan panel to the rest of the left side panel.
    - The pogo pins should be visible and nearest to the top of the panel.
8. Reinstall the left side panel.

## Cleaning the bottom dust filter:

The bottom intake fans are covered by a dust filter, which can be removed for cleaning.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to clean the bottom dust filter:

1. Lay the machine down on its right side, with the mesh window facing upwards.
    - Use a soft surface (such as a towel) to avoid scratching the chassis.
2. Unscrew the five screws holding the dust filter onto the machine.

![Bottom dust filter screws](./img/bottom-dust-filter-screws.webp)

3. Pull the dust filter off of the machine.
4. Clean dust out of the dust filter using compressed air or gentle running water.
    - If liquid is used to clean the dust filter, wait until the dust filter has completely dried before reinstalling it.
5. While holding the dust filter onto the bottom of the machine, reinstall its five screws.
    - By default, the rockets point towards the front of the machine.
    - The mesh should face inward towards the chassis, with the metal frame facing outward.

## Replacing the bottom fans:

The two 140mm bottom intake fans can be individually replaced.

**Part numbers:**
- Bottom fans: Be Quiet! Silent Wings 4 140mm (`SIW4-14025-MF-PWM`)

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the bottom fans:

1. Follow the steps above to [remove the left side panel](#removing-the-side-panels).
3. Unplug the fan(s) being replaced from the bottom fan splitter.
3. Turn the machine on its right side and [remove the bottom dust filter](#cleaning-the-bottom-dust-filter).
4. Remove the four screws (per fan) securing the fan to the chassis.

![Bottom fan screws](./img/bottom-fan-screws.webp)

5. Screw in the new fan(s).
6. Reinstall the bottom dust filter.
7. Set the machine upright again and plug the new fan(s) into the bottom fan splitter.
8. Reinstall the left side panel.

## Replacing the CPU cooler and CPU:

Thelio Mira R4-N4 includes a self-contained liquid cooler to dissipate heat from the CPU to the radiator, where the CPU cooler's fans expel it from the system. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU and the cooler may help the system run cooler.

**Part numbers:**
- The CPU cooler is an [ID-Cooling Frostflow X 280](http://www.idcooling.com/product/detail?id=300&name=FROSTFLOW%20X%20280).
- The CPU uses an AMD AM5 socket.

**Tools required:** Cross-head (Phillips) screwdriver, thermal paste  
**Time estimate:** 45 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to remove the CPU cooler/thermal paste:

1. Follow the steps above to [remove the left and right side panels](#removing-the-side-panels), [remove the front glass](#removing-the-front-glass), and [remove the top shell](#removing-the-top-shell).
2. Unfasten the velcro strip to free the CPU cooler's signal cables from behind the motherboard.
    - The braided cable leading to the `FANIN1` port of the Thelio Io board plugs into the motherboard's `CPU_FAN1` header.
    - The thinner cable leading to the CPU cooler pump plugs into the motherboard's `AIO_PUMP` header.

![CPU cooler cables](./img/cpu-cooler-cables.webp)

3. Set the computer on its right side (with the motherboard at the bottom).
3. Unscrew the four screw heads holding the CPU cooler pump onto the CPU (highlighted red below).
    - The screw heads will come off of the posts underneath when fully unscrewed.

![CPU cooler pump screws](./img/cpu-cooler-pump.webp)

4. Unplug the CPU cooler pump from the `AIO_PUMP` header on the motherboard, highlighted cyan above.
5. Unplug the combined CPU cooler fan cable from the fan splitter board next to the motherboard, highlighted green above.
6. Unfasten the velcro strip holding the CPU cooler's liquid tubes to the back of the chassis, highlighted yellow above.
7. While holding the radiator in place so it doesn't fall, unscrew the eight silver screws holding the radiator on from the top of the chassis.
    - If you aren't replacing the CPU cooler or fans (but are replacing only the thermal paste and/or the CPU), you can skip this step and leave the radiator attached to the chassis.

![CPU cooler radiator screws](./img/cpu-cooler-radiator.webp)

8. Remove the CPU cooler pump and radiator (if applicable) from the chassis.
9. Using a paper towel, clean the existing thermal paste off of the cooler and CPU. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

### Steps to replace the CPU:

1. Push the locking lever down and outward until it's able to spring away from the motherboard.
    - Caution: the locking lever may spring up with significant force when freed.

![CPU locking lever](./img/cpu-locking-lever.webp)

2. Flip the CPU holder away from the CPU.
    - The CPU holder opens in the opposite direction from the locking lever.

![CPU holder raised](./img/cpu-holder-raised.webp)

3. Carefully lift the CPU out of the CPU socket.
    - Be careful not to bend any of the gold pins on the CPU socket, and do not touch the gold pads on the CPU.

![CPU (removed)](./img/cpu-removed.webp)

4. Gently place the new CPU into the socket.
    - The triangle on the CPU should be oriented to match the triangle on the CPU cover, pointing towards the top left of the motherboard.
5. Flip the CPU cover back onto the CPU and push the locking lever down into place.

### Steps to replace the CPU cooler's fans:

1. Unscrew the four silver screws (per fan) holding the fan(s) onto the radiator.

![CPU cooler fan scrwes](./img/cpu-cooler-fans.webp)

2. Unplug the daisy-chained cable connecting the two fans.
3. Remove the old fan(s) from the radiator.
4. Align the new fan(s) and plug the fans into each other.
    - The spinning side of the fans should face away from the radiator.
    - With the liquid tubes on the left, the cables should be oriented towards the bottom of the radiator.
    - The cable channels from the center of each fan (behind the fan blades) should point to the same place (the corner at which the fans connect).
    - The fan closer to the tubes plugs into the other fan; the fan farther from the tubes plugs into the chassis.
5. Screw in the new fan(s).

### Steps to install the thermal paste/CPU cooler:

1. Draw an `X` shape of thermal paste onto the CPU.

![Thermal paste application](./img/thermal-paste-application.webp)

2. Place the all-in-one liquid cooler back into the chassis with the tubes running against the rear of the chassis.
3. Place the cooler pump back onto the four posts surrounding the CPU.
    - The cooler pump's logo should have the pentagon pointed downwards, and the tubes should come off the right side.
4. Screw in the screw caps over each post.
    - Partially install each screw cap first, then fully tighten them in diagonal pairs.
5. While holding the cooler's radiator in place against the top of the chassis, screw it in from above using its eight silver screws.
    - Again, partially install all eight screws first to ensure alignment, then go back and tighten them all.
6. Set the computer upright.
7. Plug the cooler pump into the `AIO_PUMP` header at the top right corner of the motherboard.
8. Plug the fan cable into the fan splitter to the right of the motherboard.
    - By default, the cable plugs into the bottom header; both headers provide the same signal.
9. Pull the excess cooler pump cable through the cable management cutout above the motherboard, and secure it behind the motherboard along with the braided motherboard fan input cable using the velcro strap.
10. Hold the liquid tubes against the back of the chassis and secure them in place using the velcro strap.
11. Reinstall the top shell, front glass, and both side panels.

## Replacing the Thelio Io board:

Named after Jupiter's moon Io, the Thelio Io daughterboard handles the front power button and fan control. If the Thelio Io board becomes defective, it can be replaced using the instructions below.

**Part numbers:**
- Thelio Mira B4-N3 uses [Thelio Io version 2](https://github.com/system76/thelio-io/tree/92c2a60b6d6acc0f9d51d819cba07ad28e2b03f3) ([PCB revision thelio_io_2.3](https://github.com/system76/thelio-io-hardware/tree/91814370002f762ac01cd1dd99dcbb43336352ab/pcb-thelio-io)).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 35 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the Thelio Io board:

1. Follow the steps above to [remove both side panels](#removing-the-side-panels), [remove the front glass](#removing-the-front-glass), and [remove the top shell](#removing-the-top-shell).
2. Unplug all wires from the Thelio IO board (behind the right side panel, near the power button).

![Thelio Io board cabling](./img/thelio-io-cabling.webp)

3. Lay the machine on its right side and follow the steps above to [remove the CPU cooler radiator](#replacing-the-cpu-cooler-and-cpu) from the top of the chassis.
    - It is not necessary to remove the CPU cooler pump from the CPU/motherboard, or to unplug the CPU cooler fans from the chassis.
4. Stand the machine upright again.
    - The CPU cooler radiator can rest on the GPU brace, but the weight of the radiator should not be placed directly onto the GPU. Alternatively, the GPU brace and GPU can be [removed](#replacing-the-gpu) to provide more working room.
5. Unscrew the two screws holding the Thelio Io board onto the chassis from the opposite side.

![Thelio Io screws](./img/thelio-io-screws.webp)

6. Screw in the new Thelio Io board from behind.
    - Orient the board so the System76 logo is upside-down (and so the `FRONT PANEL` header is closest to the front panel).
7. Lay the machine on its right side, reinstall the CPU cooler radiator, and stand the machine upright again.
8. Reconnect the wiring to the Thelio Io board.
9. Reinstall top shell, front glass, and side panels.
10. If necessary, flash the appropriate [Thelio Io firmware](https://github.com/system76/thelio-io/tree/92c2a60b6d6acc0f9d51d819cba07ad28e2b03f3) for your chassis revision.
    - Boards provided by System76 for a specific system should already have the correct firmware, while boards repurposed from other systems may need flashing.

### Thelio Io wiring guide:

![Thelio Io wiring guide](./img/thelio-io-board.webp)

1. When wiring the Thelio Io board, refer to the port labels and the following guide (listed from left to right, considering the board mounts upside-down).
    - `PFP1`/`FRONT PANEL` - to the power button on the front panel.<!-- Add link -->
        - On the Thelio Io board, the wire color order (from left to right) is red, black, blue, black (the red wire connects to the `LED+` pin).
    - `PMB1`/`MOTHERBOARD` - to the `PANEL1` header at the bottom right of the motherboard, highlighted purple below.
        - On both the Thelio Io board and the motherboard, the wire color order (from left to right) is red, black, blue, black.
    
    ![Motherboard bottom headers](./img/motherboard-headers-bottom.webp)
    
    - `POWER1`/`POWER INPUT` - to the [power supply](#replacing-the-power-supply) via a 4-pin Molex adapter.
        - The white plastic clip needs to be held away from the connector to unplug this cable from the Thelio Io board.
    - `FANIN1`/`MOTHERBOARD FAN INPUT` - to the `CPU_FAN1` header near the top right of the motherboard, highlighted cyan below.
    
    ![Motherboard fan header](./img/motherboard-header-fan.webp)
    
    - `FANOUT4`/`AUX FAN` - disconnected by default.
    - `FANOUT3`/`GPU FAN` - to the bottom fan splitter (highlighted green below), which connects to both bottom case fans.
    
    ![Fan splitters](./img/fan-splitters.webp)
    
    - `FANOUT2`/`INTAKE FAN` - to the pogo pin connector for the left side panel fans.
    
    ![Pogo pin header](./img/pogo-header.webp)
    
    - `FANOUT1`/`CPU FAN` - to the top fan splitter (connecting to the [CPU radiator fans](#steps-to-replace-the-cpu-coolers-fans)), highlighted cyan below.
    
    ![Fan splitters](./img/fan-splitters.webp)

    - `USB` - to the `USB_7_8` header at the bottom center of the motherboard, highlighted orange below.
        - A small clip needs to be held down to unplug this cable from the Thelio Io board.
        
    ![Motherboard bottom headers](./img/motherboard-headers-bottom.webp)

## Replacing the front I/O:

The front I/O board (containing the front USB and audio ports) can be replaced if necessary.

**Part numbers:**
- I/O board: `MYS7823` (Rev. `A01`)

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 35 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the front I/O:

1. Follow the steps above to [remove both side panels](#removing-the-side-panels).
2. If installed, [remove the additional 2.5" or 3.5" drive bay](#installing-an-additional-25-or-35-bay).
3. From the left side of the case, unscrew the two screws holding the I/O board in place.

![I/O board screws](./img/front-io-screws.webp)

4. From the right side of the case, unfasten the velcro straps holding the I/O board's cabling in place.
    - All four cables pass through the first two velcro straps (highlighted green below).
    - The three USB cables pass through the third velcro strap (highlighted cyan).

![I/O board cabling](./img/front-io-cabling.webp)

5. Unplug the I/O board's cables from the `USB32_TC1` and `USB32_5_6` headers on the right side of the motherboard (above the GPU), and the `HD_AUDIO1` header at the bottom left of the motherboard (below the GPU).

![I/O board headers (USB)](./img/front-io-headers-usb.webp)<br/><br/>
![I/O board header (audio)](./img/front-io-header-audio.webp)

6. Plug the new I/O board's cables into the same headers.
7. Fasten the new I/O board's cables into the velcro straps.
8. Slide the new I/O board into its cutout on the front of the chassis, then screw it into place.
    - Ensure the ports extend all the way through the front accent's cutouts before inserting the screws.
9. Reinstall the side panels.

## Replacing the power button:

The power button can be replaced independently of the surrounding front panel.

**Part numbers:**
- Power button: `PB-02A-19-RF-BOW` (stainless steel, white LED)

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 35 minutes  
**Difficulty:** High <span style="color:red;">●</span> 

### Steps to troubleshoot the power button:

1. Ensure the power supply switch on the back of the computer is set to the `1` position.
    - If it was set to `0`, change it to `1` and try powering on the computer again.
2. Follow the steps above to [remove the left side panel](#removing-the-side-panels).
3. Press the white `POWER` button on the right side of the Thelio Io's chassis cutout, located behind the radiator fans at the top of the chassis.

![Thelio Io power button](./img/thelio-io-power-button.webp)

4. If the system powers on with the `POWER` button, then the front power button or its connection to the [Thelio Io board](#thelio-io-wiring-guide) may be faulty. Proceed to the next section to try re-plugging or replacing the power button.
    - If the system doesn't power on with the `POWER` button, the Thelio Io board or another component (such as the motherboard or power supply) may be faulty, or a connection between those components may be missing. Check the [Thelio Io wiring](#thelio-io-wiring-guide) and the [power supply cabling](#replacing-the-power-supply).

### Steps to replace the power button:

1. Follow the steps above to [remove both side panels](#removing-the-side-panels) and [remove the front glass](#removing-the-front-glass).
2. Unscrew the two screws holding the front accent onto the chassis.

![Front accent screws](./img/front-accent-screws.webp)

3. Unplug the power button from the `FRONT PANEL`/`PFP1` port at the top left of the [Thelio Io board](#thelio-io-wiring-guide).
4. Unscrew the power button through the front of the accent.
    - A gripping pad or tool may be required to loosen the button.
5. Screw the new power button into the accent.
6. Plug the new power button into the `FRONT PANEL`/`PFP1` port on the Thelio Io board with the red wire on the left (facing the power button).
    - The wires connected to the power button should be laid out as shown below:
    ![Power button wiring](./img/power-button-wiring.jpg)
7. Place the front accent against the front panel and screw it into place from behind.
    - Ensure the front I/O ports are properly aligned within the accent while screwing in the accent. If necessary, [unscrew the front I/O ports](#replacing-the-front-io) to adjust them.
8. Reinstall the front glass and side panels.