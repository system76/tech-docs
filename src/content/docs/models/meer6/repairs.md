# Meerkat (Parts & Repairs)

Several components in your Meerkat can be upgraded or replaced as necessary. Power the machine off and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Removing the bottom panel](#removing-the-bottom-panel)
- [Replacing an M.2 drive](#replacing-an-m2-drive)
- [Replacing the RAM](#replacing-the-ram)
- [Adding/removing a 2.5" storage drive](#addingremoving-a-25-storage-drive)
- [Resetting the CMOS](#resetting-the-cmos)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
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

![Bottom panel screws](./img/bottom-screws.jpg)

3. Gently lift the bottom panel out of the machine.
    - If your Meerkat is the tall model (with 2.5" drive slot), be careful not to damage the thin cable running from the motherboard to the bottom panel.

## Replacing an M.2 drive:

Your Meerkat has two M.2 slots. The first slot is size 2280 and supports PCIe NVMe Gen 4. The second slot is size 2242 and supports SATA III.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 6 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Unscrew the retainer screw opposite the M.2 slot.

![M.2 slot screw](./img/m2-screw.jpg)

3. Remove the existing M.2 drive by pulling it out of the slot.
4. Insert the new M.2 drive into the slot and hold it in place.
5. Replace the retainer screw.
6. Replace the bottom panel.

## Replacing the RAM:

The Meerkat 6 supports up to 64GB (2x32GB) of DDR4 SO-DIMMs running at 3200MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Press the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM latch](./img/ram-slots.jpg)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down until it clicks into place.

## Adding/removing a 2.5" storage drive:

If your Meerkat is the tall variety, it has a 2.5" SATA III drive bay built into the bottom panel.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to add/remove a 2.5" storage drive:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Locate the SATA connector in the bottom panel and orient your drive to match.

![2.5" drive port](./img/sata-port.jpg)

3. Slide the drive into the slot on the bottom panel until it plugs all the way into its connector.

![2.5" drive installation](./img/sata-drive-insertion.webp)

4. Replace the bottom panel.

## Resetting the CMOS:

A CMOS reset will restore the UEFI firmware settings to their factory defaults, which can sometimes help if the system is not booting.

**Tools required:** Cross-head (Phillips) screwdriver and (optionally) tweezers  
**Time estimate:** 13 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to reset CMOS:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel) and [remove the M.2 drive](#replacing-an-m2-drive).
2. Disconnect the CMOS battery connector.
    - Try to pull the plug, not the wires.

![CMOS battery connector](./img/cmos-connector.jpg)

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

![Wireless card](./img/wireless-card.jpg)

3. Use the 5mm hex socket to remove the M.2 screw standoff, which also holds the wireless card in place.
4. The wireless card will pop up at an angle. Remove the card from the M.2 slot.
5. Insert the new wireless card into the M.2 slot at an angle.
6. Replace the retaining standoff.
7. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place.
    - _Use caution when attaching the connectors; the pins can bend, break, or snap._

## Removing the motherboard:

Removing the motherboard is necessary for replacing the CMOS battery, cooling fan, and thermal paste.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to remove the motherboard:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel) and [remove the M.2 drive](#replacing-an-m2-drive).
2. If your Meerkat is the tall variety, disconnect the ribbon cable that leads to the 2.5" drive bay.
    - The white latch pulls away from the motherboard to free the cable; gently pull the cable out of the connector.

![SATA drive bay ribbon cable connector](./img/sata-ribbon-connector.jpg)

3. Disconnect the two [wireless antenna cables](#replacing-the-wireless-card).
4. Remove the two motherboard mounting screws along the back edge of the machine.

![Motherboard mounting screws](./img/motherboard-screws.jpg)

5. Carefully lift the motherboard out of the case.
    - It is easiest to lift the front side first, pivoting the board against the back side of the case.
    - [Removing the RAM](#replacing-the-ram) is not required, but can make removing the motherboard easier.

## Replacing the fan:

The cooling fan can be removed to clean dust out of the cooling system or to access the CPU heatsink when replacing the thermal paste.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fan:

1. Follow the steps above to [remove the motherboard](#removing-the-motherboard).
2. Unplug the fan connector, highlighted cyan below.

![Cooling fan](./img/cooling-fan.jpg)

3. Remove the two fan screws (highlighted red above) and remove the fan.
    - The plastic strip at the bottom of the fan is adhered to the heatsink; gently pull the fan off of the heatsink.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip, where UEFI settings and the computer's hardware clock are stored. If your clock is constantly resetting, your CMOS battery may need to be replaced.

**Warning (ingestion hazard):** Keep batteries out of reach of children. Death or serious injury can occur if ingested. If a battery is suspected to be swallowed or inserted inside any part of the body, seek immediate medical attention. In the US, you can also call the National Battery Ingestion Hotline for guidance: [1 (800) 498-8666](tel:18004988666)

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 27 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel), [remove the motherboard](#removing-the-motherboard), [remove the fan](#replacing-the-fan), and [unplug the CMOS battery](#resetting-the-cmos).
2. The CMOS battery is adhered to the motherboard with double-sided tape. Gently pull the CMOS battery off of the motherboard.

![CMOS battery](./img/cmos-battery.jpg)

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

![Heatsink screws](./img/heatsink-screws.jpg)

3. Gently lift the heatsink off of the motherboard. 
4. Using a paper towel, clean the old thermal paste off of the heatsink and CPU. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Heatsink and motherboard after cleaning](./img/thermal-paste-removal.webp)

5. Apply a small dot of thermal paste directly onto the CPU chip.

![Thermal paste applied to CPU](./img/thermal-paste-application.jpg)

6. Replace the heatsink and tighten the four screws in the order, starting with #1, then #2, #3, and #4.
7. Reinstall the fan, motherboard, wireless card, M.2 drive, and bottom panel.

## Removing the cable keeper:

Your Meerkat comes with a cable organizer to help hold cables in place. The cable organizer can be removed for a lower profile.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the cable keeper:

1. Unscrew the Phillips screw holding the cable keeper in place.

![Cable keeper](./img/cable-keeper.jpg)

## Removing the top cover:

The Meerkat's top cover can be removed or replaced.

**Tools required:** None  
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the top cover:

1. Pull up on the grooves in the back of the cover.

![Top cover grooves](./img/top-cover-grooves.jpg)

2. Once the back is free, pull the rest of the top cover off of the machine.

![Top cover removed](./img/top-cover-removed.jpg)

## Mounting with VESA Mount:

Your Meerkat comes with a VESA mount adapter, which allows it to be mounted on the back of a display. Because it mounts to the display's VESA mount, this will only work on displays which aren't already mounted via the VESA mount.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to mount with the VESA adapter:

1. Insert the two shoulder screws into the bottom of the Meerkat.

![VESA mount on Meerkat](./img/vesa-screws-meerkat.jpg)

2. Use the remaining four screws to attach the VESA mounting plate, using the arrow to guide the orientation.

![VESA mounting plate on display](./img/vesa-screws-display.jpg)

3. Insert the two shoulder screws in the Meerkat into the two holes in the mounting plate (highlighted cyan above), then set the Meerkat down so it hangs on the mounting plate.

![Meerkat on display](./img/vesa-mounted-meerkat.jpg)
