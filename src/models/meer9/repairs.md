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
- [Mounting with VESA mount](#mounting-with-vesa-mount)

## Removing the bottom panel:

The bottom panel can be removed to access the internal components.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the bottom panel:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
1. Remove the four screws in the corners.
    - The screws are not attached to the surrounding rubber rings.
    - If any of the rubber rings come off of the bottom panel, put them back before replacing the screws.

![Bottom panel screws](./img/bottom-screws.webp)

3. Lift the bottom panel off of the machine.
    - If a 2.5" storage drive is installed, the cable will keep the bottom panel attached to the motherboard; flip the bottom panel over in the direction of the cable.

## Replacing an M.2 drive:

Your Meerkat has two M.2 slots, which support PCIe NVMe Gen 4. Slot 1 fits sizes 2280 and 2242, while Slot 2 fits size 2242 only. (Adapter brackets can be used to install size 2230 SSDs into the 2242 slots.)

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 6 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drives:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Unscrew the retainer screw opposite the M.2 slot.
    - The Slot 1 (2280/2242) screw is highlighted cyan below, while the Slot 2 (2242) screw is highlighted yellow.
    - If you're installing a drive into a slot for the first time and the screw is not present in the system, it was included separately in your Meerkat's box.

![M.2 slot screw](./img/m2-slots.webp)

3. Remove the existing M.2 drive by pulling it out of the slot.
4. Insert the new M.2 drive into the slot and hold it in place.
5. Replace the retainer screw.
    - If you are installing a 2242 drive in the 2280/2242 slot where a 2280 drive was previously installed, you may need to remove the wireless card's screw (highlighted red below) and replace it with the adapter nut from your Meerkat's box, then insert the 2242 drive and secure its screw into the adapter nut.
        - If the base nut comes out of the motherboard when removing the wireless card screw, screw it back into the motherboard (below the wireless card) before adding the adapter nut on top.
    ![M.2 2242 drive in Slot 1 (before installing nut)](./img/m2-nut-before.webp)
    ![M.2 2242 drive in Slot 1 (empty nut installed)](./img/m2-nut-empty.webp)
    ![M.2 2242 drive in Slot 1 (nut & screw installed)](./img/m2-nut-full.webp)
6. Replace the bottom panel.
    - If you're using an SSD slot for the first time, remove the blue tape covering the corresponding thermal pad on the inner side of the bottom panel before reinstalling the panel.

## Replacing the RAM:

The Meerkat 9 supports up to 96GB (2x48GB) of DDR5 SO-DIMMs running at 5600MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Pull the small tabs on both sides of the RAM away from the RAM stick simultaneously. The RAM should spring up to an angle.

![RAM latch](./img/ram-slots.webp)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down until it clicks into place.

## Replacing the 2.5" storage drive:

The Meerkat 9 supports one 2.5" SATA III drive, which mounts onto the bottom panel.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the 2.5" storage drive:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Unplug the SATA cable from the existing 2.5" drive (if installed).

![2.5" drive port](./img/sata-port.webp)

3. Unscrew the existing 2.5" drive from the sides of the drive caddy (if installed).
    - It is not necessary to remove the drive caddy from the bottom panel.

![2.5" drive screws](./img/25-drive-screws.webp)

4. Slide the old drive out of the drive caddy (if installed), then slide the new drive in.
5. Screw in the four side drive screws (two per side).
    - If your Meerkat did not come with a 2.5" drive installed, then the screws were included separately in the box.
6. Plug the SATA cable into the new 2.5" drive.
7. Replace the bottom panel.

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

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel) and [remove the M.2 drive from Slot 1](#replacing-an-m2-drive).
2. Gently remove the two antennas (highlighted cyan below) by pulling them up and away from the wireless card.

![Wireless card](./img/wireless-card.webp)

3. Remove the wireless card screw (or M.2 adapter nut) holding the wireless card down.
    - If the base nut (below the wireless card) comes out of the motherboard during this step, screw it back into the motherboard before replacing the wireless card.
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

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel).
2. Optionally [remove the M.2 drive](#replacing-an-m2-drive) and unplug the SATA cable from the motherboard, highlighted cyan below.

![SATA cable attached to motherboard](./img/motherboard.webp)

3. Disconnect the two [wireless antenna cables](#replacing-the-wireless-card), highlighted red above.
4. Remove the two motherboard mounting screws near the back ports of the machine, highlighted yellow above.
5. Carefully pull the motherboard out of the case.
    - It is easiest to lift from the back ports, pivoting the board against the front side of the chassis.
    - Slightly squeezing the sides of the chassis near the back ports can help provide more clearance while pivoting the motherboard.
    - Slowly peel the tape above the front USB-C ports away from the chassis with the motherboard.
    - When reinstalling the motherboard, ensure both the front and back ports are aligned with their chassis cutouts.

## Replacing the fan:

The cooling fan can be removed to clean dust out of the cooling system or to access the CPU heatsink when replacing the thermal paste. The CMOS battery is mounted on the underside of the fan.

**Part numbers:**
- The fan is a Delta Electronics `BSC0805HA-00`.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fan:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel), [unplug the wireless card](#replacing-the-wireless-card), and [remove the motherboard](#removing-the-motherboard).
    - In the below photos, the SATA cable has also been unplugged as detailed in [removing the motherboard](#removing-the-motherboard).
2. Unplug the fan connector, highlighted red below.

![Cooling fan](./img/fan.webp)

3. Unplug the CMOS battery connector, highlighted yellow above.
    - This step is optional if you are not replacing the fan or the CMOS battery.
4. Loosen the three fan screws (highlighted cyan above) and remove the fan.
    - The two small, light silver screws (along the bottom edge) are held captive, and will not fully come away from the fan.
    - The larger, dark silver screw will come apart from the fan when fully loosened.
5. Peel the CMOS battery off of the old fan and stick it onto the new fan.
6. Replace the fan and fan screws, then plug the CMOS and fan connectors back into the motherboard.
7. Reinstall the motherboard, reconnect the wireless card antennas, reconnect the SATA cable and reinstall the M.2 drive (as necessary), and reinstall the bottom panel.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip, where UEFI settings and the computer's hardware clock are stored. If your clock is constantly resetting, your CMOS battery may need to be replaced.

**Warning (ingestion hazard):** Keep batteries out of reach of children. Death or serious injury can occur if ingested. If a battery is suspected to be swallowed or inserted inside any part of the body, seek immediate medical attention. In the US, you can also call the National Battery Ingestion Hotline for guidance: [1 (800) 498-8666](tel:18004988666)

**Part numbers:**
- The CMOS battery is a standard 3V CR2032 battery.
    - The stock battery is Toshiba brand.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 27 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel), [remove the motherboard](#removing-the-motherboard), and [remove the fan](#replacing-the-fan).

2. If not done while removing the fan, unplug the CMOS battery connector, highlighted yellow below.

![CMOS battery](./img/cmos-battery.webp)

3. Slwoly pull the CMOS battery away from where it's adhered to the fan. The double-sided tape may remain on the fan after the CMOS battery is removed.
4. Stick the new CMOS battery onto the fan (next to the black plastic screw arm), then plug the new CMOS battery in and replace the fan, motherboard, and bottom panel.

## Replacing the thermal paste:

Thermal paste helps facilitate heat transfer between the CPU and the cooling equipment. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU and the heatsink may help the system run cooler.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the thermal paste:

1. Follow the steps above to [remove the bottom panel](#removing-the-bottom-panel), [remove the M.2 drive](#replacing-an-m2-drive), [unplug the wireless card](#replacing-the-wireless-card), [remove the motherboard](#removing-the-motherboard), and [remove the fan and attached CMOS battery](#replacing-the-fan).
2. Loosen the four heatsink screws in diagonal pairs (starting with one screw, then the one diagonal to it, followed by the other pair).
    - The screws are held captive and will not completely separate from the heatsink.

![Heatsink screws](./img/heatsink-screws.webp)

3. Gently lift the heatsink off of the motherboard.
4. Using a paper towel, clean the old thermal paste off of the heatsink and CPU. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Motherboard and heatsink, before cleaning](./img/thermal-paste-removal-before.webp)
![Motherboard and heatsink, after cleaning](./img/thermal-paste-removal-after.webp)

5. Apply a small line of thermal paste directly onto the CPU chip.

![Thermal paste applied to CPU](./img/thermal-paste-application.webp)

6. Replace the heatsink and tighten the four screws.
    - Partially tighten each screw first, then fully tighten them in diagonal pairs.
7. Reinstall the fan and CMOS battery, motherboard, wireless card antennas, M.2 drive, and bottom panel.

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
