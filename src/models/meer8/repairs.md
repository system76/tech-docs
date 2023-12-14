# Meerkat (Parts & Repairs)

Several components in your Meerkat can be upgraded or replaced as necessary. Power the machine off and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Removing the bottom panel](#removing-the-bottom-panel)
- [Replacing an M.2 drive](#replacing-an-m2-drive)
- [Replacing the RAM](#replacing-the-ram)
- [Adding/removing a 2.5" storage drive](#addingremoving-a-25-storage-drive)
- [Resetting the CMOS](#resetting-the-cmos)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Removing the optional I/O add-on](#removing-the-optional-io-add-on)
- [Removing the motherboard](#removing-the-motherboard)
- [Replacing the fan](#replacing-the-fan)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the thermal paste](#replacing-the-thermal-paste)
- [Removing the cable keeper](#removing-the-cable-keeper)
- [Mounting with VESA mount](#mounting-with-vesa-mount)

## Removing the bottom panel:

The bottom panel can be removed to access the internal components.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the bottom panel:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
1. Completely loosen the four screws in the corners.
    - The screws are attached and will not completely separate from the bottom panel.
    - Multiple sets of screws may be present on the tall model; the outermost screws (surrounded by rubber feet) are for the bottom panel.

![Bottom panel screws](./img/bottom-screws.webp)

3. Gently lift the bottom panel out of the machine.
    - If your Meerkat is the tall model (with a 2.5" drive slot), be careful not to damage the thin cable running from the motherboard to the bottom panel.

## Replacing an M.2 drive:

Your Meerkat has two M.2 slots. The first slot is size 2280 and supports PCIe NVMe Gen 4. The second slot is size 2242 and supports SATA III.

If you have the tall model Meerkat with the optional I/O expansion module, it will occupy the 2242 slot.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 6 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Unscrew the retainer screw opposite the M.2 slot.
    - In the photo below, the short model is shown on the left, while the tall model (with the optional I/O expansion module installed) is shown on the right.
    - The 2280 slot screw is highlighted cyan, while the 2242 slot screw is highlighted red.

![M.2 slot screw](./img/m2-slots.webp)

3. Remove the existing M.2 drive by pulling it out of the slot.
4. Insert the new M.2 drive into the slot and hold it in place.
5. Replace the retainer screw.
6. Replace the bottom panel.

## Replacing the RAM:

The Meerkat 7 supports up to 64GB (2x32GB) of DDR4 SO-DIMMs running at 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Pull the small tabs on both sides of the RAM away from the RAM stick simultaneously. The RAM should spring up to an angle.

![RAM latch](./img/ram-slots.webp)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down until it clicks into place.

## Adding/removing a 2.5" storage drive:

If your Meerkat is the tall variety, it has a 2.5" SATA III drive bay built into the bottom panel.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to add/remove a 2.5" storage drive:

1. If a 2.5" drive was not already installed, pull the four rubber plugs out of the bottom of the Meerkat.
    - This can be done before or after opening the machine.

![Bottom panel plugs](./img/bottom-plugs.webp)

2. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
3. Locate the SATA connector in the bottom panel and orient your drive to match.

![2.5" drive port](./img/sata-port.webp)

4. Slide the drive into the slot on the bottom panel until it plugs all the way into its connector.

![2.5" drive installation](./img/25-drive-insertion.webp)

5. Insert four 2.5" drive screws through the bottom panel to secure the 2.5" drive.

![2.5" drive screws](./img/25-drive-screws.webp)

5. Replace the bottom panel.

## Resetting the CMOS:

A CMOS reset will restore the UEFI firmware settings to their factory defaults, which can sometimes help if the system is not booting.

**Tools required:** Cross-head (Phillips) screwdriver and (optionally) tweezers  
**Time estimate:** 13 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to reset CMOS:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel) and [remove the M.2 drive](#replacing-an-m2-drive).
2. Disconnect the CMOS battery connector (labeled `RTCBAT` on the motherboard).
    - Try to pull the plug, not the wires.

![CMOS battery connector](./img/cmos-connector.webp)

3. Hold down the power button for at least 15 seconds to discharge any residual energy in the system.
4. Reconnect the CMOS battery.
5. Replace the M.2 drive and bottom panel.
6. Power up the machine. The system may take longer than usual to boot; this is normal behavior when the CMOS has been reset.

## Replacing the wireless card:

Your Meerkat's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (E-key).

**Tools required:** Cross-head (Phillips) screwdriver, 5.0 mm hex socket  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel) and [remove the M.2 drive](#replacing-an-m2-drive).
2. Gently remove the two antennas (highlighted cyan below) by pulling them up and away from the wireless card.

![Wireless card](./img/wireless-card.webp)

3. Use the 5mm hex socket to remove the M.2 screw standoff, which also holds the wireless card in place.
4. The wireless card will pop up at an angle. Remove the card from the M.2 slot.
5. Insert the new wireless card into the M.2 slot at an angle.
6. Replace the retaining standoff.
7. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place.
    - _Use caution when attaching the connectors; the pins can bend, break, or snap._

## Removing the optional I/O add-on:

The optional I/O add-on is an expansion module that adds one additional 2.5-Gigabit Ethernet port and two additional USB 2.0 Type-A ports to the system.

If you ordered your Meerkat with this module, the steps below can be used to remove it. If you're upgrading your Meerkat with the module, reverse the steps to install it.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to remove the optional I/O add-on:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Disconnect the module's ribbon cable by flipping the black latches up and pulling the ribbon out of the connectors on either side.

![I/O expansion module (internal view)](./img/expansion-module-internal.webp)

3. Unscrew the M.2 screw holding the expansion module's adapter into the M.2 2242 slot and remove the adapter.
4. Unscrew the two screws holding the expansion module in from the back of the system.

![I/O expansion module (external view)](./img/expansion-module-external.webp)

5. Lift the expansion module out of the system.
    - When reinstalling the expansion module, the side labeled `BTM` should face outwards (so it will point down towards the bottom of the machine once the system is upright).

### Steps to remove the expansion slot placeholder:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Unscrew the two screws holding the expansion slot placeholder in from the back of the system.

![Expansion slot placeholder](./img/expansion-placeholder.webp)

3. Lift the expansion slot placeholder out of the system.
    - When reinstalling the slot placeholder, the side labeled `BTM` should face outwards (so it will point down towards the bottom of the machine once the system is upright).

## Removing the motherboard:

Removing the motherboard is necessary for replacing the CMOS battery, cooling fan, and thermal paste.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to remove the motherboard:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel) and [remove the M.2 drive](#replacing-an-m2-drive).
2. If your Meerkat is the tall variety:
    - Remove the [optional I/O add-on or expansion slot placeholder](#removing-the-optional-io-add-on).
    - Disconnect the ribbon cable that leads to the 2.5" drive bay.
        - The white latch pulls away from the motherboard to free the cable; gently pull the cable out of the connector.

![SATA drive bay ribbon cable connector](./img/sata-ribbon-connector.webp)

3. Disconnect the two [wireless antenna cables](#replacing-the-wireless-card).
4. Remove the two motherboard mounting screws along the back edge of the machine.

![Motherboard mounting screws](./img/motherboard-screws.webp)

5. Carefully lift the motherboard out of the case.
    - It is easiest to lift the front side first, pivoting the board against the back side of the case.
    - [Removing the RAM](#replacing-the-ram) is not required, but can make removing the motherboard easier.
    - Slightly squeezing the front sides of the chassis can help provide more clearance while pivoting the motherboard.

## Replacing the fan:

The cooling fan can be removed to clean dust out of the cooling system or to access the CPU heatsink when replacing the thermal paste.

The screws used for the fan are the same type as those used for the [M.2 SSDs](#replacing-an-m2-drive).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fan:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel), [remove the M.2 drive](#replacing-an-m2-drive), [unplug the wireless card](#replacing-the-wireless-card), and [remove the motherboard](#removing-the-motherboard).
2. Unplug the fan connector, highlighted cyan below.

![Cooling fan](./img/cooling-fan.webp)

3. Remove the two fan screws (highlighted yellow above) and remove the fan.
    - The plastic strip at the bottom of the fan is adhered to the heatsink; gently pull the fan off of the heatsink.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip, where UEFI settings and the computer's hardware clock are stored. If your clock is constantly resetting, your CMOS battery may need to be replaced.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 27 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel), [remove the motherboard](#removing-the-motherboard), [remove the fan](#replacing-the-fan), and [unplug the CMOS battery](#resetting-the-cmos).
2. The CMOS battery is adhered to the motherboard with double-sided tape. Gently pull the CMOS battery off of the motherboard.

![CMOS battery](./img/cmos-battery.webp)

3. Stick the new CMOS battery onto the motherboard using the included double-sided tape (if present), then plug the new CMOS battery in and replace the fan, motherboard, and bottom panel.

## Replacing the thermal paste:

Thermal paste helps facilitate heat transfer between the CPU and the cooling equipment. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU and the heatsink may help the system run cooler.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the thermal paste:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel), [remove the M.2 drive](#replacing-an-m2-drive), [unplug the wireless card](#replacing-the-wireless-card), [remove the motherboard](#removing-the-motherboard), and [remove the fan](#replacing-the-fan).
2. Loosen the four heatsink screws in order, starting with #1, then #2, #3, and #4.
    - The screws are attached and will not completely separate from the heatsink.

![Heatsink screws](./img/heatsink-screws.webp)

3. Gently lift the heatsink off of the motherboard. 
4. Using a paper towel, clean the old thermal paste off of the heatsink and CPU. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Heatsink and motherboard after cleaning](./img/thermal-paste-removal.webp)

5. Apply a small line of thermal paste directly onto the CPU chip.

![Thermal paste applied to CPU](./img/thermal-paste-application.webp)

6. Replace the heatsink and tighten the four screws in the order, starting with #1, then #2, #3, and #4.
7. Reinstall the fan, motherboard, wireless card, M.2 drive, and bottom panel.

## Removing the cable keeper:

Your Meerkat comes with a cable organizer to help hold cables in place. The cable organizer can be removed for a lower profile.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the cable keeper:

1. Unscrew the Phillips thumbscrew holding the cable keeper in place.

![Cable keeper](./img/cable-keeper.webp)

## Removing the top cover:

The Meerkat's top cover can be removed or replaced.

**Tools required:** None  
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the top cover:

1. Pull up on the grooves in the back of the cover.

![Top cover grooves](./img/top-cover-grooves.webp)

2. Once the back is free, pull the rest of the top cover off of the machine.

![Top cover removed](./img/top-cover-removed.webp)

## Mounting with VESA Mount:

Your Meerkat comes with a VESA mount adapter, which allows it to be mounted on the back of a display. This allows operation as an all-in-one, taking up no additional desk space.

Because the Meerkat mounts to the display's VESA mount, this will only work on displays which aren't already mounted via the VESA mount.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to mount with the VESA adapter:

1. Insert the two shoulder screws into the bottom of the Meerkat.

![VESA mount screws in Meerkat](./img/vesa-screws-meerkat.webp)

2. Use the remaining four screws to attach the VESA mounting plate, using the arrow to guide the orientation.

![VESA mounting plate on display](./img/vesa-screws-display.webp)

3. Insert the two shoulder screws in the Meerkat into the two holes in the mounting plate (highlighted cyan above), then set the Meerkat down so it hangs on the mounting plate.
    - The Meerkat can be mounted in either direction.

![Meerkat on display](./img/vesa-mounted-meerkat.webp)
