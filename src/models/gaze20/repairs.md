# Gazelle (Parts & Repairs)

Many components in your Gazelle can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the battery](#replacing-the-battery)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the keyboard](#replacing-the-keyboard)
- [Replacing the speakers](#replacing-the-speakers)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Part numbers:**
- Bottom cover: `6-39-V2553-012`

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the bottom cover:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 13 bottom panel screws.

![Bottom panel screws](./img/bottom-panel-screws.webp)

3. Pull the bottom panel off, starting from over the ports in the back.

## Replacing the RAM:

The Gazelle 20 supports up to 64GB (2x32GB) of DDR5 SO-DIMMs running at 5600MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 7 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Pull the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM slots](./img/ram-slots.webp)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports up to two M.2 SSDs. Both M.2 slots are size 2280 and support PCIe NVMe Generation 4.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unscrew the retainer screw opposite the M.2 slot.

![M.2 slots](./img/m2-slots.webp)

3. Remove the existing M.2 drive by pulling it out of the slot.
4. Insert the new M.2 drive into the slot and hold it in place.
5. Replace the retainer screw.

## Replacing the wireless card:

Your Gazelle's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (E-key).

**Part number:**
- The standard wireless card is an Intel `BE200`.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unscrew the wireless card screw holding the card and its wire bracket in place.

![Wireless card](./img/wireless-card-screw.webp)

3. Remove the metal bracket that holds the wires onto the card. The wireless card will pop up at an angle.
4. Gently remove the two antennas (highlighted red below) by pulling them up and away from the wireless card.

![Wireless card antennas](./img/wireless-card-antennas.webp)

5. Remove the card from the M.2 slot.
6. Insert the new wireless card into the M.2 slot at an angle.
7. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place.
    - Use caution when attaching the connectors; the pins can bend, break, or snap.
8. While holding the end of the card down, replace the metal bracket and the retaining screw.
9. Replace the bottom cover.

## Replacing the battery:

The battery provides primary power whenever the system is unplugged.

**Part numbers:**
- The battery's model number is `V360BAT-4-73`, and the original part number is `6-87-V35WS-73G00`.
   - Third-party battery sellers may list one or both of these numbers, and may offer other compatible part numbers with the same model number.
   - You can also [contact System76](https://support.system76.com) to purchase a replacement battery.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 8 minutes    
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the five battery screws, highlighted yellow below.

![Battery](./img/battery.webp)

3. Unplug the battery connector (highlighted red above) and lift the battery out of the chassis.
4. Install the new battery and replace the bottom cover.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Warning (ingestion hazard):** Keep batteries out of reach of children. Death or serious injury can occur if ingested. If a battery is suspected to be swallowed or inserted inside any part of the body, seek immediate medical attention. In the US, you can also call the National Battery Ingestion Hotline for guidance: [+1 (800) 498-8666](tel:18004988666)

**Part numbers:**
- The CMOS battery is a standard 3V KTS CR2032W battery.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 15 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. If you're replacing the CMOS battery, [remove the main battery](#replacing-the-battery).
    - If you're clearing the CMOS without replacing the CMOS battery, you still need to [unplug the main battery](#replacing-the-battery), but don't need to remove it.
3. Unplug the white connector (labeled `RTC`) that connects the CMOS battery to the motherboard.

![CMOS battery](./img/cmos-battery.webp)

4. If you are replacing the CMOS battery, gently pull from the sides to pry it up from where it's stuck to the case.
4. To clear the CMOS, open the lid of the machine and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
5. Stick the new CMOS battery onto the chassis (if necessary) and reconnect the CMOS battery to the motherboard.
6. [Reinstall/reconnect the main battery](#replacing-the-battery) and [replace the bottom cover](#removing-the-bottom-cover).
7. Power up the Gazelle. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

The Gazelle 20 has a single heatsink assembly with two fans. This assembly cools the CPU and GPU.

If the fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. [Contact support](https://support.system76.com) to start a warranty claim or parts purchase. These instructions can also be used if physical damage to the heatsink necessitates its replacement.

Thermal paste helps facilitate effective heat transfer between the CPU/GPU and the cooling equipment; depending on your climate and the age of the machine, replacing the thermal paste may improve cooling performance. The thermal paste should generally be replaced whenever the heatsink is removed.

Thermal putty (thicker than thermal paste) is used to bridge the gap between the VRAM chips and the heatsink. Replacing the thermal putty is optional when removing the heatsink. System76 suggests [Thermal Grizzly Putty Basic](https://www.thermal-grizzly.com/en/tg-putty/s-tg-p-b-030) (available at various retailers) or a similar alternative.

**Part numbers:**
- Fan/heatsink assembly: `6-31-V25RN-202`
- Left fan: Yingfan `5V2`
- Right fan: Yingfan `DV3`

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fans/heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
    - It's also recommended to [remove the M.2 drive from slot 2](#replacing-an-m2nvme-ssd) (if installed) for easier access to the fan wire.
2. Remove any clear tape that is securing the fan wires.
3. Remove the thirteen heatsink and fan screws.
    - The 11 numbered screws should be unscrewed in order of the stamped numbers, starting with #1, then #2, and continuing until you have removed #11. The two unnumbered fan screws (marked `3V3` and `5V2`) can be removed in any order.
    - The silver screw (#11) and the unnumbered fan screws will detatch when fully loosened. Screws #1-10 are held captive and will not completely detatch from the heatsink/fans.
    - Do not remove the smaller black screws holding the fan covers onto the fans.

![Thermal screws](./img/thermal-screws.webp)

4. Unplug the two white fan connectors from the motherboard (highlighted green above).
5. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
6. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.
    - You can optionally remove the thermal putty from the four VRAM chips surrounding the GPU chip if you have replacement thermal putty to install.

![Thermal paste removal](./img/thermal-paste-removal.webp)

7. After cleaning the CPU, GPU, and heatsink, apply a small line of thermal paste directly onto both CPU chips and the GPU chip.
    - If you aren't replacing the thermal putty, scoop the existing putty (from the VRAM chip and the corresponding location on the heatsink) into the center of each VRAM chip using a flat plastic tool.

![Thermal paste application](./img/thermal-paste-application.webp)

8. Carefully replace the heatsink.
9. Replace the heatsink and fan screws, starting with #1, then #2, and so on until #11; also replace the two unnumbered fan screws.
10. Plug the two white fan connectors back into the motherboard.

## Replacing the keyboard:

The keyboard can be replaced if its switches or electronics have been damaged.

**Part numbers:**
- The keyboard's model number is `CVM18H03US930FA`, and its part number is `6-80-PC510-013-1MD`, also known as `6-V256RNP-KB-MCL-US`.
    - Keyboards shipped by System76 include a custom-printed Super key.

**Tools required:** Cross-head (Phillips) screwdriver, tweezers (optional)  
**Time estimate:** 10 minutes  
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the keyboard:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the heatsink](#replacing-the-cooling-system).
    - Removing the heatsink isn't required if the adhesive is fed between the motherboard and the fan; by default, the adhesive is not fed through (meaning heatsink removal is required) due to its shape and size.
    - Replacing the thermal paste is recommended whenever the heatsink is removed.
2. Pull the keyboard adhesive out of the machine to detatch it from the keyboard.
    - Pull the adhesive strip slowly to avoid breaking it. Grasp farther down the strip as it comes out of the machine (don't pull the end far away from the machine.)
    - If the adhesive strip breaks, remove as much of it as possible. The keyboard can be reinstalled without the adhesive strip.

![Keyboard adhesive strip & push point](./img/keyboard-mount-points.webp)

3. Open the lid slightly and place the machine on its side.
4. Push a screwdriver into the keyboard push point (highlighted red above) until the keyboard pops out.

![Keyboard push point](./img/keyboard-push-point.webp)

5. Set the machine back down and raise the keyboard away from the chassis. The larger ribbon cable is for the keyboard, while the smaller ribbon cable is for the keyboard backlight.

![Keyboard ribbon connectors](./img/keyboard-ribbons.webp)

6. Flip the black latches upwards to free the ribbon cables.
7. Pull the ribbon cables out of the connectors.
8. Remove the keyboard and replace it with the new one.
9. Carefully slide both ribbon cables into their connectors.
10. Flip the black latches back into place to secure the ribbon cables.
11. (Optional) Replace the keyboard adhesive strip on the chassis.
12. Place the keyboard back into position, starting with the tabs on the bottom edge.
13. Secure the rest of the keyboard by pressing down on each of its edges.
14. Turn the machine lid-side down again and [replace the bottom cover](#removing-the-bottom-cover).

## Replacing the speakers:

The system has two bottom-firing speakers, which can be removed and replaced individually.

**Part numbers:**
- Left speaker: `6-23-5V25K-0L0`
- Right speaker: `6-23-5V25K-0R0`

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the speakers:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Disconnect the speaker wire from the motherboard. 

![Speaker wires and screws](./img/speakers.webp)

3. Unscrew the speaker screws (two per speaker) and lift the speaker out of the machine. 
    - The left speaker wire (pictured on the right) is partially routed through channels in the chassis; be careful when removing it.
4. Place the new speaker in the machine.
5. Plug in the connector, securing the wire in the chassis channels (for the left speaker).
6. Replace the screws
7. Reinstall the bottom panel.
