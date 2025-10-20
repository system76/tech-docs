# Oryx Pro (Parts & Repairs)

Many components in your Oryx Pro can be upgraded or replaced as necessary.

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the battery](#replacing-the-battery)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the speakers](#replacing-the-speakers)
- [Replacing the keyboard](#replacing-the-keyboard)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Part numbers:**
- Bottom panel: `6-39-V56K3-012`

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the bottom cover:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 12 bottom panel screws.

![Bottom panel screws](./img/bottom-panel-screws.webp)

3. Pull the bottom panel off, starting from the hinges in the back.

## Replacing the RAM:

The Oryx Pro 13 supports up to 96GB (2x48GB) of DDR5 SO-DIMMs running at 5600MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Press the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM removal](./img/ram-slots.webp)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down on the RAM until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280. Both slots support PCIe NVMe Generation 4, but slot 1 runs at x4 bandwidth while slot 2 (closest to the battery) runs at x2 bandwidth.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unscrew the retainer screw opposite the M.2 slot.

![M.2 slots](./img/m2-slots.webp)

3. Remove the existing M.2 drive by pulling it out of the slot.
4. Insert the new M.2 drive into the slot parallel with the motherboard.
5. Replace the retainer screw.
6. If you are using a slot for the first time, you can optionally remove the plastic backing from the thermal strip and apply it to the inner side of the bottom panel.

![M.2 slot thermal strip application](./img/m2-thermal-strip.webp)

## Replacing the battery:

The battery provides primary power whenever the system is unplugged.

**Part numbers:**
- The battery's model number is `V540BAT-4-80`, and the original part number is `6-87-V540S-81N01`.
    - Third-party battery sellers may list one or both of these numbers, and may offer other compatible part numbers with the same model number.
    - You can also [contact System76](https://support.system76.com) to purchase a replacement battery.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the four silver battery screws near the corners of the battery.

![Battery screws](./img/battery.webp)

3. Unplug the white connector (highlighted yellow above) connecting the battery to the motherboard.
4. Lift the battery out of the chassis.
    - The wireless antennas are routed through plastic channels along the top-left corner of the battery; lift the wires out of the channels while removing the battery.
5. Place the new battery into the chassis.
6. Feed the wireless antennas back through the new battery's plastic channels.
7. Screw the new battery into the chassis.
8. When plugging in the new battery, the red wire on the connector is oriented towards the battery, and the black wire is oriented away from the battery.

## Replacing the wireless card:

Your Oryx Pro's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (E-key).

**Part numbers:**
- The standard wireless card is an Intel `AX210NGW`.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unscrew the wireless card screw holding the card and its wire bracket in place.

![Wireless card screw](./img/wireless-card-screw.webp)

3. Remove the metal bracket that holds the antenna wires onto the card.
4. Gently unplug the two antennas (highlighted red below) by pulling them up and away from the wireless card.
    - The wireless card will spring up to a 30° angle after the antennas are detatched.

![Wireless card antennas](./img/wireless-card-antennas.webp)

5. Pull the wireless card out of the M.2 slot.
6. Insert the new wireless card into the M.2 slot at an angle.
7. Push the card down until it's parallel with the motherboard and the end is resting on the screw hole.
8. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place.
    - Use caution when attaching the connectors; the pins can bend, break, or snap.
9. Place the metal bracket back over the antennas and screw hole.
10. Replace the wireless card screw and the bottom panel.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Warning (ingestion hazard):** Keep batteries out of reach of children. Death or serious injury can occur if ingested. If a battery is suspected to be swallowed or inserted inside any part of the body, seek immediate medical attention. In the US, you can also call the National Battery Ingestion Hotline for guidance: [+1 (800) 498-8666](tel:18004988666)

**Part numbers:**
- The CMOS battery is a standard 3V KTS CR2032W battery.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 15 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and, if installed, [remove the SSD from slot 1](#replacing-an-m2nvme-ssd) (closest to the side of the machine).
    - Removing the SSD from slot 1 is optional if you're resetting the CMOS but not replacing the CMOS battery.

![CMOS battery](./img/cmos-battery.webp)

2. Unplug the small white connector that connects the CMOS battery to the motherboard. If you are replacing the battery, gently pull from the sides to pry it up from where it's stuck to the chassis.
3. To clear the CMOS, [disconnect the main battery](#replacing-the-battery), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
4. Reconnect the CMOS battery, [reconnect the main battery](#replacing-the-battery), and [replace the M.2 SSD in slot 1](#replacing-an-m2nvme-ssd) (if necessary).
5. Replace the bottom panel and power up the Oryx Pro. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

The Oryx Pro 13 uses two fans and a heatsink manufactured as a single assembly.

If the fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. [Contact support](https://support.system76.com) to start a warranty claim or parts purchase. These instructions can also be used if physical damage to the heatsink necessitates its replacement.

Thermal paste helps facilitate effective heat transfer between the CPU/GPU and the cooling equipment; depending on your climate and the age of the machine, replacing the thermal paste may improve cooling performance. The thermal paste should generally be replaced whenever the heatsink is removed.

Thermal putty (thicker than thermal paste) is used to bridge the gap between the VRAM chips and the heatsink. Replacing the thermal putty is optional when removing the heatsink. System76 suggests [Thermal Grizzly Putty Basic](https://www.thermal-grizzly.com/en/tg-putty/s-tg-p-b-030) (available at various retailers) or a similar alternative.

**Part numbers:**
- Heatsink/fan assembly: Peak `6-31-V56NN-102`
- Individual fans (may not be available separately):
    - Left fan: YingFan `507 NA80080HHT4B10007`
    - Right fan: YingFan `508 NB800805HHT4B10007`

**Tools required:** Cross-head (Phillips) screwdriver, thermal putty spreader (flat plastic tool)  
**Time estimate:** 30 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fans/heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Peel back any clear tape that is securing the fan wires.
    - If the bottom of the tape extends behind the battery, peel the tape back from the top and leave the bottom attached for ease of reinstallation.
3. Remove the silver heatsink and fan screws in the order of the stamped numbers, starting with #1, then #2, and continuing until you have removed #9.
    - Do not remove the smaller black screws holding the fan covers onto the fans.

![Thermal screws](./img/thermal-screws.webp)

4. Unplug the two fan connectors (one white and one black) from the motherboard.
5. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
6. Using a paper towel, remove the existing thermal paste from the CPU and GPU chips, as well as the corresponding points on the heatsink. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.
    - You can optionally remove the thermal putty from the four VRAM chips surrounding the GPU chip if you have replacement thermal putty to install.
    - Some thermal paste and/or putty may already be on the motherboard around the chips, or may get onto the motherboard while cleaning the paste/putty off of the chips. Thermal paste and putty is typically not conductive; it's safer to leave excess paste on the board than to risk damaging the board with rough removal.

![Thermal paste removal](./img/thermal-paste-removal.webp)

7. Apply a small line of thermal paste directly onto the CPU and GPU chips.
    - If you're also replacing the thermal putty, apply the new putty to the four VRAM chips.
    - If you aren't replacing the thermal putty, scoop the existing putty (from the chip and the corresponding location on the heatsink) into the center of each VRAM chip using a flat plastic tool.

![Thermal paste application](./img/thermal-paste-application.webp)

8. Carefully replace the heatsink.
9. Replace the silver heatsink and fan screws, starting with #1, then #2, and so on until #9.
10. Plug the two fan connectors back into the motherboard.

## Replacing the speakers:

The system has two bottom-firing speakers, which can be removed and replaced individually.

**Part numbers:**
- Left speaker:
    - Model number: `V560TNE-L`
    - Part number: `6-23-5V560-0L1`
- Right speaker:
    - Model number: `V560KNE-R`
    - Part number: `6-23-5V56N-0R1`

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the left speaker:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the battery](#replacing-the-battery) (if installed).
2. Unscrew the two speaker screws holding the speaker onto the chassis.

![Left speaker wire and screws](./img/speaker-left.webp)

3. Peel back the clear tape holding the speaker's wire to the chassis.
4. Disconnect the speaker connector from the motherboard.
5. Replace the speaker, plug in the speaker connector, and secure the wire with the clear tape on the chassis.
6. Replace the main battery and the bottom cover.

### Steps to replace the right speaker:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unscrew the two speaker screws holding the speaker onto the chassis.

![Right speaker wire and screws](./img/speaker-right.webp)

3. Disconnect the speaker connector from the motherboard.
4. Replace the speaker, plug in the speaker connector, and replace the bottom cover.

## Replacing the keyboard:

The keyboard can be replaced if its switches or electronics have been damaged.

**Warning:** The keyboard is held in by two strips of adhesive in addition to one of the bottom panel screws and the perimeter clips. The adhesive may be difficult to remove from the keyboard and/or case, and while the keyboard should still be functional if removed carefully, it is possible that permanent aesthetic damage will occur to the bottom side of the keyboard during removal. Removal is not recommended unless the keyboard is malfunctioning.

**Part numbers:**
- The keyboard's model number is `CVM22K33US9430H`, and its part number is `6-80-V5610-01B-1`, also known as `6-V560KNP-KB-MCL-US`.
    - Keyboards shipped by System76 include a custom-printed Super key.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** Hard <span style="color:red;">●</span>

### Steps to replace the keyboard:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover), [remove the heatsink](#replacing-the-cooling-system), and, if installed, [remove the SSD from slot 2](#replacing-an-m2nvme-ssd) (closest to the battery).
    - Replacing the thermal paste is recommended if the heatsink is removed.
    - It may be possible to pull the adhesive out from behind the heatsink without removing the heatsink using a tweezers or a small screwdriver, but the adhesive is not fed through the heatsink by default due to its shape and size.
2. Pull the keyboard adhesive out of the machine to detatch it from the keyboard.
    - The adhesive strip access points are highlighted green below.
    - Pull each adhesive strip slowly to avoid breaking it. Grasp farther down the strip as it comes out of the machine (don't pull the end far away from the machine).
    - If an adhesive strip breaks, remove as much of it as possible. The keyboard can be reinstalled without the adhesive strips.

![Keyboard adhesive access points & push point](./img/keyboard-mount-points.webp)

3. Open the lid slightly and place the machine on its side.
4. Push the keyboard out of the chassis from below through the gaps in the chassis (highlighted red above).

![Keyboard push point](./img/keyboard-push-point.webp)

5. Set the machine back down and raise the keyboard away from the chassis. The larger ribbon cable is for the keyboard, while the smaller ribbon cable is for the keyboard backlight.
    - To avoid getting thermal paste on your work surface, you can re-mount the heatsink while the machine's still turned on its side after pushing the keyboard's perimeter tabs out of the chassis.

![Keyboard ribbons](./img/keyboard-ribbons.webp)

6. Flip the black latches upwards to free the ribbon cables.
7. Pull the ribbon cables out of the connectors.
8. Remove the keyboard and replace it with the new one.
9. Carefully slide both ribbon cables into their connectors.
10. Flip the black latches back into place to secure the ribbon cables.
11. (Optional) Replace the keyboard adhesive strips on the chassis, sliding the tabs at the end through the adhesive strip access points.
    - For the larger adhesive strip, use the rightmost access slot (labeled `KNE`).
    ![Keyboard adhesive slots](./img/keyboard-adhesive-slots.webp)
12. Place the keyboard back into position, starting with the tabs on the bottom edge.
13. Secure the rest of the keyboard by pressing down on each of its edges.
14. Turn the machine lid-side down again and replace the bottom panel.
