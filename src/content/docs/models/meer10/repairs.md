---
title: Meerkat (Parts & Repairs)
---

Several components in your Meerkat can be upgraded or replaced as necessary. Power the machine off and unplug all peripherals before working with any internal components. Then, follow these step-by-step guides for instructions:

- [Opening the bottom panel](#opening-the-bottom-panel)
- [Replacing an expansion card](#replacing-an-expansion-card)
- [Replacing an M.2 drive](#replacing-an-m2-drive)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Removing the top cover](#removing-the-top-cover)
- [Removing the motherboard](#removing-the-motherboard)
- [Replacing the fan](#replacing-the-fan)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the thermal paste](#replacing-the-thermal-paste)
- [Installing the cable keeper](#installing-the-cable-keeper)
- [Mounting with the VESA adapter](#mounting-with-the-vesa-adapter)

## Opening the bottom panel:

The bottom panel can be opened to access the internal components.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to open the bottom panel:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the screw holding the latch shut.

![Bottom panel screws](./img/bottom-screw.webp)

3. Pull the rectangular latch open.
4. Pull the bottom panel open once unlatched.
    - The side opposite the latch is hinged, and will not come away from the chassis.

## Replacing an expansion card:

The Meerkat 10 supports an optional expansion card to add either a second 2280-size M.2 SSD slot (which connects via the built-in 2242-size slot) or a second 2.5-gigabit Ethernet port. This card can be replaced or swapped for another type.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the storage expansion card:

1. Follow the steps above to [open the bottom panel](#opening-the-bottom-panel).
2. If an M.2 drive is installed in the 2280 adapter slot, slide the yellow clip away from the drive to free the drive, then remove the drive from the slot.

![Extra storage drive removal](./img/expansion-storage-drive.webp)

3. To remove the 2280 adapter from the motherboard, pull the black pin out of its mounting hole, then remove the adapter from the `M-KEY NVMe` slot.

![Extra storage slot removal](./img/expansion-storage-slot.webp)

4. To remove the storage slot cover from the chassis, remove the two back screws holding it in place.

![Expansion card screws (storage)](./img/expansion-screws-storage.webp)

### Steps to replace the Ethernet expansion card:

1. Follow the steps above to [open the bottom panel](#opening-the-bottom-panel).
2. Remove the two back screws holding the expansion card in place.

![Expansion card screws (network)](./img/expansion-screws-network.webp)

3. Pull the black clip surrounding the connector away from the motherboard to unlock the connector, then unplug the connector from the motherboard.

![Expansion card connector (network)](./img/expansion-connector-network.webp)

### Steps to replace the blank expansion slot cover:

1. Follow the steps above to [open the bottom panel](#opening-the-bottom-panel).
2. Remove the two back screws holding the expansion slot cover in place.

![Expansion card screws (blank)](./img/expansion-screws-blank.webp)

3. When reinstalling the slot cover, the side labeled `BTM` faces the bottom cover of the chassis, and the side with padding faces the I/O ports within the chassis.

## Replacing an M.2 drive:

Your Meerkat has two M.2 slots.

- The first slot fits size 2280 drives.
    - On Core Ultra 7 and Core Ultra 5 models, the first slot supports PCIe NVMe Gen 5.
    - On the Core 7 and Core 3 models, the first slot supports PCIe NVMe Gen 4.
- The second slot supports PCIe NVMe Gen 4 drives, and fits drives of size 2242 by default. An optional [adapter](#steps-to-replace-the-storage-expansion-card) can be installed to fit 2280 drives in the 2242-size slot. The 2280 adapter is installed by default if you purchased additional storage as part of your original order.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drives:

1. Follow the steps above to [open the bottom panel](#opening-the-bottom-panel).
2. Free the drive from its retainer clip.
    - For the primary slot (Gen 5 or Gen 4, depending on CPU model), nearest the side of the chassis, twist the blue clip clockwise to free the drive.
    - For the secondary (Gen 4) adapter slot, nearest the RAM, slide the yellow clip away from the drive.
    ![M.2 storage drives (with adapter slot)](./img/m2-slots-expansion.webp)
    - If an aftermarket 2242-size drive has been installed directly into the secondary (Gen 4) slot, as shown below, pull the black plastic pin out of the mounting hole.
    ![M.2 storage drives (without expansion slot)](./img/m2-slots-base.webp)
3. Remove the old drive from the slot and insert the new drive into the slot.
4. Secure the new drive in place as necessary.
    - If you installed a drive into the primary (Gen 5 or Gen 4) slot, twist the blue clip counterclockwise to lock the drive into place.
    - If you installed a drive into the secondary (Gen 4) adapter, the yellow clip locks automatically.
    - If you installed a 2242-size drive into the secondary (Gen 4) slot, press the black pin back into the hole to hold the drive down.

## Replacing the RAM:

The Meerkat 10 supports up to 96GB (2x48GB) of DDR5 SO-DIMMs running at 5600MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [open the bottom panel](#opening-the-bottom-panel).
2. Pull the small tabs on both sides of the RAM away from the RAM stick simultaneously. The RAM should spring up to an angle.

![RAM latches](./img/ram-slots.webp)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down until it clicks into place.

## Replacing the wireless card:

Your Meerkat's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (E-key).

**Part numbers:**
- Preinstalled wireless card (dependent on model):
    - Core Ultra 7 and Core Ultra 5 models: Intel `BE201`
    - Core 7 and Core 3 models: Intel `BE202`

**Tools required:** Cross-head (Phillips) screwdriver, 5.0 mm hex socket  
**Time estimate:** 15 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [open the bottom panel](#opening-the-bottom-panel) and [remove the M.2 drive from Slot 1](#replacing-an-m2-drive).
2. Gently remove the two antennas (highlighted yellow below) by pulling them up and away from the wireless card.

![Wireless card](./img/wireless-card.webp)

3. Remove the wireless card screw holding the wireless card down.
    - The wireless card screw also includes the blue plastic clip for the primary M.2 drive, a small spring, and the nut underneath the screw.
    - If the plastic clip and spring come away from the nut underneath them, then you'll also need to remove the nut to free the wireless card.
4. The wireless card will pop up at an angle. Remove the card from the M.2 slot.
5. Insert the new wireless card into the M.2 slot at an angle.
6. Replace the retaining screw (including the nut underneath and the plastic clip and spring, if the pieces separated while removing them).
7. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place.
    - _Use caution when attaching the connectors; the pins can bend, break, or snap._

## Removing the top cover:

The black plastic top cover of the Meerkat (which includes a System76 logo sticker by default) can be removed from the rest of the chassis.

**Tools required:** None   
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the top cover:

1. Pull the top cover off of the chassis, starting at the gap in the back.

![Top cover removal](./img/top-cover-removal.webp)

## Removing the motherboard:

Removing the motherboard is necessary for replacing the CMOS battery, cooling fan, and thermal paste.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to remove the motherboard:

1. Follow the steps above to [remove the top cover](#removing-the-top-cover).
2. Unscrew the four silver corner screws and unhook the corners of the grey wireless antenna wire from the black plastic portions of the chassis.
    - Do not attempt to pull on or remove either end of the wireless antenna wire at this time; instead, just unhook the middle portion from its channels in the corners of the chassis.

![Internal cage screws](./img/motherboard-cage-screws.webp)

3. Follow the steps above to [open the bottom panel](#opening-the-bottom-panel), [remove the back expansion slot (or placeholder)](#replacing-an-expansion-card), and [remove the M.2 drive from Slot 1](#replacing-an-m2-drive).
4. While holding the Meerkat, push on the flat silver portion of the chassis (shown above) to move the internal motherboard cage out of the black plastic outer chassis shell.
    - The bottom cover is attached to the silver inner cage, and will also come out of the outer shell.
5. Unplug the two wireless antenna wires from the wireless card, and unscrew the four black corner screws holding the motherboard into the silver cage.

![Motherboard screws](./img/motherboard-screws.webp)

6. Carefully remove the motherboard from the silver cage.
    - Because the back ports extend slightly through the cutouts in the silver cage, it's easiest to lift from the front side first, pivoting the board against the back side of the chassis.
    - The front ports have tape securing the motherboard to the front of the chassis, so it takes some force to peel the tape off while raising the motherboard. The motherboard can be pushed by the edge of the fan below while lifting from the top.
    - When reinstalling the motherboard, ensure both the front and back ports are aligned with their chassis cutouts and no tape is obstructing the ports. The port alignment may not be perfect until all screws have been replaced.

## Replacing the fan:

The cooling fan can be removed to clean dust out of the cooling system, or to access components underneath it, like the CPU heatsink or the CMOS battery. The fan can also be replaced if it's failed or become excessively noisy.

**Part numbers:**
- The fan is an AVC `BAZC0810R5HY013`.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fan:

1. Follow the steps above to [remove the top cover](#removing-the-top-cover), [open the bottom panel](#opening-the-bottom-panel), [remove the back expansion slot (or placeholder)](#replacing-an-expansion-card), [remove the M.2 drive from Slot 1](#replacing-an-m2-drive), [unplug the wireless card](#replacing-the-wireless-card), and [remove the motherboard](#removing-the-motherboard).
2. Unscrew the two fan screws.

![Fan screws](./img/fan.webp)

3. Unplug the fan connector.
4. Pull the fan away from the heatsink.
    - The black tape holding the fan onto the heatsink can be peeled away with the fan.
    - If the white plastic washers come out of the fan's screw holes while removing the fan, place them back into the fan's screw holes (or onto the motherboard's screw hole posts) before reinstalling the fan.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip, where UEFI settings and the computer's hardware clock are stored. If your clock is constantly resetting, your CMOS battery may need to be replaced.

You can also temporarily disconnect the CMOS battery to reset the system's CMOS. Due to the position of the CMOS connector, it's easiest to remove the CMOS battery in order to do this.

**Warning (ingestion hazard):** Keep batteries out of reach of children. Death or serious injury can occur if ingested. If a battery is suspected to be swallowed or inserted inside any part of the body, seek immediate medical attention. In the US, you can also call the National Battery Ingestion Hotline for guidance: [+1 (800) 498-8666](tel:18004988666)

**Part numbers:**
- The CMOS battery is a standard 3V KTS CR2032 battery.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 28 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the top cover](#removing-the-top-cover), [open the bottom panel](#opening-the-bottom-panel), [remove the back expansion slot (or placeholder)](#replacing-an-expansion-card), [remove the M.2 drive from Slot 1](#replacing-an-m2-drive), [unplug the wireless card](#replacing-the-wireless-card), [remove the motherboard](#removing-the-motherboard), and [remove the fan](#replacing-the-fan).
2. Slowly pull the CMOS battery away from where it's adhered to the motherboard.

![CMOS battery](./img/cmos-battery.webp)

3. Unplug the CMOS battery connector on the reverse side of the motherboard.
    - Black tape may be bridged between the two USB Type-A ports on the motherboard's front edge; in order to free the CMOS battery's cable, peel the black tape off one of the USB Type-A ports.

![CMOS battery connector](./img/cmos-battery-connector.webp)

4. If you're resetting the CMOS, hold down the motherboard's power button for a few seconds to discharge any residual energy.
5. Stick the new CMOS battery onto the motherboard, then plug the new CMOS battery in and reinstall the fan, reinstall the motherboard, reconnect the wireless card, reinstall the M.2 drive in Slot 1 (if necessary), reinstall the expansion slot (or placeholder), close the bottom panel, and reinstall the top cover.

## Replacing the thermal paste:

Thermal paste helps facilitate heat transfer between the CPU and the cooling equipment. Depending on your climate and the age of the machine, replacing the thermal paste between the CPU and the heatsink may help the system run cooler.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 30 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the thermal paste:

1. Follow the steps above to [open the bottom panel](#opening-the-bottom-panel), [remove the motherboard](#removing-the-motherboard), and [remove the fan](#replacing-the-fan).
2. Loosen the four heatsink screws in the order of the stamped numbers (starting with #1, then #2, and continuing until #4).
    - The screws are held captive and will not completely separate from the heatsink.

![Heatsink screws](./img/heatsink-screws.webp)

3. Gently lift the heatsink off of the motherboard. It may take some pressure to break the seal of the thermal paste.
4. Using a paper towel, clean the old thermal paste off of the heatsink and CPU. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Motherboard and heatsink, before cleaning](./img/thermal-paste-removal-before.webp)
![Motherboard and heatsink, after cleaning](./img/thermal-paste-removal-after.webp)

5. Apply a small line of thermal paste directly onto each of the CPU chips.

![Thermal paste applied to CPU](./img/thermal-paste-application.webp)

6. Replace the heatsink and tighten the four screws in the order of the stamped numbers (starting with #1, then #2, and continuing until #4).
    - For easier installation, partially tighten each screw first, then fully tighten them in the same numbered order.
7. Reinstall the fan, reinstall the motherboard, reconnect the wireless card, reinstall the M.2 drive in Slot 1 (if necessary), reinstall the expansion slot (or placeholder), close the bottom panel, and reinstall the top cover.

## Installing the cable keeper:

Your Meerkat comes with an optional cable organizer to help hold cables in place.

**Tools required:** Cross-head (Phillips) screwdriver (optional)  
**Time estimate:** 1 minute  
**Difficulty:** Easy <span style="color:green;">●</span>

#### Steps to install the cable keeper:

1. Screw the Phillips thumbscrew on the cable keeper into the back of the Meerkat.

![Cable keeper](./img/cable-keeper.webp)

## Mounting with the VESA adapter:

Your Meerkat comes with a VESA mount adapter, which allows it to be mounted on the back of a display. This allows operation as an all-in-one, taking up no additional desk space.

Because the Meerkat mounts to the display's VESA mount, this will only work on displays which aren't already mounted via the VESA mount.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to mount with the VESA adapter:

1. Insert the two shoulder screws into the bottom of the Meerkat.

![VESA mount screws in Meerkat](./img/vesa-screws-meerkat.webp)

2. Use the remaining four screws to attach the VESA mounting plate to the display, using the arrow to guide the orientation.

![VESA mounting plate on display](./img/vesa-screws-display.webp)

3. Insert the two shoulder screws in the Meerkat into the two holes in the mounting plate (highlighted cyan above), then set the Meerkat down so it hangs on the mounting plate.
    - The Meerkat hangs sideways and can be mounted in either direction.

![Meerkat on display](./img/vesa-mounted-meerkat.webp)
