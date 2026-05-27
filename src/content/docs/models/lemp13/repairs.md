# Lemur Pro (Parts & Repairs)

Many components in your Lemur Pro can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the main battery](#replacing-the-main-battery)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the speakers](#replacing-the-speakers)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Part numbers:**

- The bottom panel's part number is `6-39-L2403-012`.
- Replacement product model stickers can be obtained from [System76 support](https://support.system76.com).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  
**Screws:** 12 total

### Steps to remove the bottom cover:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 12 screws from the bottom panel.

![Bottom case screws](./img/bottom-screws.webp)

3. Lift the bottom cover off, starting from the hinges in the back.

## Replacing the RAM:

The Lemur Pro 13 comes with 8GB of 4800 MHz RAM soldered onto the motherboard, which cannot be replaced. There is an additional RAM slot, which can support up to a 48GB stick for 56GB of RAM total. The additional stick is a standard DDR5 SO-DIMM running at 4800 MHz.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Press the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM tabs](./img/ram-tabs.webp)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it into the keyed slot and pressing down until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports two M.2 SSDs. Both slots are size 2280 and support PCIe NVMe Generation 4.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unscrew the retainer screw opposite the M.2 slot.
    - SSD-1 is between the battery and the speaker.
    - SSD-2 is next to the RAM slot.

![M.2 slots](./img/m2-slots.webp)

3. Remove the existing M.2 drive by pulling it out of the slot.
4. Insert the new M.2 drive into the slot and hold it down.
5. Replace the retainer screw.

## Replacing the wireless card:

Your system's WiFi and Bluetooth are both handled by the same module. It connects with a standard M.2 2230 slot with PCIe and USB interfaces (E-key).

**Part numbers:**

- The standard wireless card is an Intel `AX211NGW`.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the wireless card (next to the CPU fan.) Remove any clear tape that is securing the wires.

![Wireless card](./img/wireless-card.webp)

3. Gently remove the two antennas (highlighted red above) by pulling them up and away from the wireless card.
4. Remove the retaining screw opposite the M.2 slot, highlighted yellow above.
5. The wireless card will pop up at an angle. Remove the card from the M.2 slot.
6. Insert the new wireless card into the M.2 slot at an angle.
7. Replace the retaining screw.
8. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._

## Replacing the main battery:

The battery provides primary power whenever the system is unplugged.

**Part numbers:**

- The battery's model number is `L240BAT-4-73`, and the original part number is `6-87-L240S-74B01`.
    - Third-party battery sellers may list one or both of these numbers, and may offer other compatible part numbers with the same model number.
    - You can also [contact System76](https://support.system76.com) to purchase a replacement battery.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the main battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the four silver battery screws along the perimeter of the battery.

![Main battery](./img/battery.webp)

3. Unplug the white connector that connects the battery to the motherboard.
4. Remove the and replace the battery.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Warning (ingestion hazard):** Keep batteries out of reach of children. Death or serious injury can occur if ingested. If a battery is suspected to be swallowed or inserted inside any part of the body, seek immediate medical attention. In the US, you can also call the National Battery Ingestion Hotline for guidance: [1 (800) 498-8666](tel:18004988666)

**Part numbers:**

- The CMOS battery is a standard 3V KTS CR2032W battery.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Follow the steps above to [remove the SSD from slot 1](#replacing-an-m2nvme-ssd), if installed.
3. Remove any clear tape that is securing the battery, then pull the battery away from the adhesive holding it to the case.
    - If you are only clearing the CMOS and are not replacing the CMOS battery, removing the SSD and CMOS battery is optional, but will make it easier to unplug the CMOS battery connector.

![CMOS battery](./img/cmos-battery.webp)

4. Unplug the white connector attaching the CMOS battery to the motherboard.
5. To clear the CMOS, [disconnect the main battery](#replacing-the-main-battery), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
6. Re-connect the CMOS battery and the main battery, and replace the SSD and bottom panel.
7. Power up the machine. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

If the CPU fan becomes noisy and cleaning it out doesn't fix the issue, you may need a new CPU fan. Contact support to start a warranty claim or parts purchase.

Depending on your climate and the age of the machine, it may be necessary to apply new thermal paste between the CPU and the heatsink. Thermal paste helps facilitate effective heat transfer between the CPU and the cooling equipment. These instructions can also be used in the unlikely event your heatsink needs to be replaced.

**Part numbers:**

- The fan/heatsink assembly's part number is `6-31-L240N-102`.
- The fan is an FCN `FSAP DFS5L22H15B85P EP`.
    - The fan/heatsink is produced as a single assembly. Sourcing a replacement fan without the heatsink may not be possible.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 20 minutes    
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the fans/heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Disconnect the small connector plugging the fan into the motherboard, highlighted yellow below.
    - This can alternatively be done after the fan/heatsink is removed.

![Heatsink/fan screws](./img/thermal-system.webp)

3. Remove the silver fan and heatsink screws in the order of the stamped numbers, starting with #1, then #2, and continuing until #5.
4. Remove the heatsink/fan from the system, being careful not to bend the heatsink pipe. It may take some pressure to break the seal of the thermal paste.
5. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol to remove excess or difficult-to-remove paste.

![Thermal paste removal](./img/thermal-paste-removal.webp)

6. After cleaning the CPU and heatsink, apply a small line of thermal paste directly onto the CPU.

![Thermal paste application](./img/thermal-paste-application.webp)

7. Carefully replace the fan and heatsink.
8. Replace the fan and heatsink screws in the order of the stamped numbers, starting with #1, then #2, and continuing until #5.
9. Plug the fan back in.
    - When plugging the fan in, the black wire goes on the left (closest to the side of the machine.)

## Replacing the speakers:

The system has two bottom-firing speakers, which can be removed and replaced individually.

**Part numbers:**

- The left speaker's model number is `L240TU-L-BASS`, and its part number is `6-23-5L240-0L2`.
- The right speaker's model number is `L240TU-R-BASS`, and its part number is `6-23-5L240-0R2`.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the speakers:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Disconnect the speaker wire from the motherboard.
    - This can alternatively be done after freeing the speaker.

![Speaker wires and tabs](./img/speakers.webp)

3. Pull the tops of the black rubber circles over the gray tabs holding them in place.
4. Lift the speaker up and off of the mounting posts.

![Speaker removal](./img/speaker-removal.webp)

5. Slide the new speaker onto the mounting posts and connect it to the motherboard.
