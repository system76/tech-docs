# Serval WS (Parts & Repairs)

Many components in your Serval WS can be upgraded or replaced as necessary. This page uses photos of the 15" model, but screw counts, general component locations, and other details are the same on the 17" model unless otherwise noted.

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the battery](#replacing-the-battery)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the keyboard](#replacing-the-keyboard)
- [Replacing the speakers](#replacing-the-speakers)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Part numbers:**
- Bottomm panel: `6-39-X5603-012`

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the bottom cover:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 14 bottom panel screws.

![Bottom panel screws](./img/bottom-panel-screws.webp)

3. Pull the bottom panel off, starting from the hinges in the back.

## Replacing the battery:

The battery provides primary power whenever the system is unplugged.

**Part numbers:**
- The battery's model number is `X560BAT-4-80`.
- The battery's original part number is `6-87-X560S-84J01`.
- Third-party battery sellers may list one or both of these numbers, and may offer other compatible part numbers with the same model number. You can also [contact System76](https://support.system76.com) to purchase a replacement battery.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the four black battery screws near the corners of the battery.

![Battery screws](./img/battery.webp)

3. Unplug the white connector (highlighted yellow above) connecting the battery to the motherboard.
4. Remove the battery by lifting it out of the machine.
5. Set the new battery in place on top of the screw holes.
6. When plugging in the new battery, the red wire on the connector goes on the left, and the black wire goes on the right.

## Replacing the RAM:

The Serval WS 14 supports up to 96GB (2x48GB) of DDR5 SO-DIMMs running at 5600MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Press the small tabs on both sides of the RAM away from each other simultaneously. The RAM should spring up to an angle.

![RAM removal](./img/ram-slots.webp)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down on the RAM until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports up to three M.2 SSDs of size 2280. SSD slot 1 (closest to the fan) supports PCIe NVMe Gen 5, while slots 2 and 3 (closest to the left and right sides of the battery) support PCIe NVMe Gen 4.

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

Your Serval WS's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (E-key).

**Part numbers:**
- Default wireless card: Intel `BE200`

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the M.2 SSD from slot 3](#replacing-an-m2nvme-ssd) (if installed).
2. Unscrew the wireless card screw holding the card and its wire bracket in place. 

![Wireless card screw](./img/wireless-card-screw.webp)

3. Remove the metal bracket that holds the wires onto the card.
4. Gently remove the two antennas (highlighted red below) by pulling them up and away from the wireless card.

![Wireless card antennas](./img/wireless-card-antennas.webp)

5. Slide the card horizontally out of the M.2 slot.
6. Insert the new wireless card into the M.2 slot.
7. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._
8. Replace the metal bracket and the retaining screw.
9. Replace the M.2 SSD in slot 3 (if necessary) and the bottom panel.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the comptuer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Warning (ingestion hazard):** Keep batteries out of reach of children. Death or serious injury can occur if ingested. If a battery is suspected to be swallowed or inserted inside any part of the body, seek immediate medical attention. In the US, you can also call the National Battery Ingestion Hotline for guidance: [1 (800) 498-8666](tel:18004988666)

**Part numbers:**
- The CMOS battery is a standard 3V KTS CR2032W battery.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover), [remove the main battery](#replacing-the-battery), and [remove the SSD from slot 2](#replacing-an-m2nvme-ssd) (if installed).
2. Peel back the black tape holding the CMOS battery's wire to the chassis.
3. Unplug the white connector from its header on the edge of the motherboard's underside.

![CMOS battery](./img/cmos-battery.webp)

4. To clear the CMOS, open the lid of the machine and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
5. Re-connect the CMOS battery and secure its wire with the black tape on the chassis.
    - When plugging in the CMOS battery, orient the red wire towards the corner of the motherboard.
6. Reinstall the main battery, the SSD in slot 2 (if necessary), and the bottom panel.
7. Power up the Serval WS. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

The Serval WS 13 has a single heatsink assembly with two fans. This assembly cools the CPU and GPU.

If the fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. [Contact support](https://support.system76.com) to start a warranty claim or parts purchase. These instructions can also be used if physical damage to the heatsink necessitates its replacement.

Thermal paste helps facilitate effective heat transfer between the CPU/GPU and the cooling equipment; depending on your climate and the age of the machine, replacing the thermal paste may improve cooling performance. The thermal paste should generally be replaced whenever the heatsink is removed.

Thermal putty (thicker than thermal paste) is used to bridge the gap between the VRAM chips and the heatsink. Replacing the thermal putty is optional when removing the heatsink. System76 suggests [Thermal Grizzly Putty Basic](https://www.thermal-grizzly.com/en/tg-putty/s-tg-p-b-030) (available at various retailers) or a similar alternative.

**Part numbers:**
- Heatsink/fan assembly: `6-31-X560N-102`
- Individual fans (may not be available separately):
    - Left fan: Yingfan `D56 NB801012HHT4B02F11`
    - Right fan: Yingfan `D55 NA801012HHT4B02F11`

**Tools required:** Cross-head (Phillips) screwdriver, thermal putty spreader (flat plastic tool)  
**Time estimate:** 15 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the fourteen heatsink and fan screws in order of the stamped and stickered numbers, starting with #1, then #2, and continuing until you have removed #14.
    - The screws are held captive and will not completely detatch from the heatsink/fans.
    - Do not remove the smaller black screws holding the fan covers onto the fans.

![Thermal screws](./img/thermal-screws.webp)

2. Unplug the black fan connectors from the motherboard.
4. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
5. Using a paper towel, remove the existing thermal paste from the CPU, GPU, and heatsink. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.
    - You can optionally remove the thermal putty from the six VRAM chips surrounding the GPU chip if you have replacement thermal putty to install.

![Thermal paste removal](./img/thermal-paste-removal.webp)

6. Apply a small line of thermal paste directly onto the CPU chip and the GPU chip.
    - If you're also replacing the thermal putty, apply the new putty to the six VRAM chips.
    - If you aren't replacing the thermal putty, scoop the existing putty (from the VRAM chip and the corresponding location on the heatsink) into the center of each VRAM chip using a flat plastic tool.

![Thermal paste application](./img/thermal-paste-application.webp)

7. Carefully replace the heatsink.
8. Replace the fan and heatsink screws, starting with #1, then #2, and so on until #14.
9. Plug the white fan connectors back into the motherboard.

## Replacing the keyboard:

The keyboard can be replaced using the instructions below.

**Part numbers:**
- Keyboard: `6-X560WNT-G-KB-MCL4-US`
    - Keyboards shipped by System76 include a custom-printed Super key.

**Tools required:** Cross-head (Phillips) screwdriver; tweezers (optional)  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the keyboard:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Pull the keyboard adhesive out of the machine to detatch it from the keyboard.
    - The adhesive strip access point is highlighted green below.
    - If the end of the keyboard adhesive strip is tucked behind the fan, it can be pulled out using tweezers or a small screwdriver, or the [thermal system can be removed](#replacing-the-cooling-system) to expose it.
        - Replacing the thermal paste is recommended if the thermal system is removed.
    - If the adhesive strip breaks, remove as much of it as possible. The keyboard can be reinstalled without the adhesive strip.

![Keyboard adhesive & push point](./img/keyboard-adhesive.webp)

3. Open the lid slightly and place the machine on its side.
4. Push the screwdriver into the keyboard push point (highlighted red above) until the keyboard pops out.

![Keyboard push point](./img/keyboard-push-point.webp)

5. Set the machine back down and raise the keyboard away from the chassis. The larger ribbon cable is for the keyboard, while the smaller ribbon cable is for the keyboard backlight.

![Keyboard ribbons](./img/keyboard-ribbons.webp)

6. Flip the black latches upwards to free the ribbon cables.
7. Pull the ribbon cables out of the connectors.
8. Remove the keyboard and replace it with the new one.
9. Carefully slide both ribbon cables into their connectors.
10. Flip the black latches back into place to secure the ribbon cables.
11. (Optional) Replace the keyboard adhesive strip on the chassis.
12. Place the keyboard back into position, starting with the tabs on the bottom edge.
13. Secure the rest of the keyboard by pressing down on each of its edges.
14. Turn the machine lid-side down again.
15. Replace the bottom panel.

## Replacing the speakers:

The system has two bottom-firing speakers, which can be removed and replaced individually.

**Part numbers:**
- Left speaker: `6-23-5X560-0L1`
- Right speaker: `6-23-5X560-0R1`

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the left speaker:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the SSD from slot 2](#replacing-an-m2nvme-ssd) (if installed).
    - You can optionally remove the [SSD from slot 1](#replacing-an-m2nvme-ssd) and the [main battery](#replacing-the-battery) for easier access to the speaker wire and the tape holding it down.
2. Pull the speaker off of the plastic posts.

![Left speaker wire and screws](./img/speaker-left.webp)

3. Peel back (from the bottom) the black tape holding the speaker's wire to the chassis.
    - A screwdriver can be used to lift the bottom edge of the tape from below the main battery.
4. Disconnect the speaker connector from the motherboard.
5. Replace the speaker, plug it into the `J_SPKL1` header, and secure the wire with the black tape on the chassis.
6. Replace the SSD(s), the main battery, and the bottom cover as necessary.

### Steps to replace the right speaker:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Pull the speaker(s) off of the plastic posts.

![Right speaker wire and screws](./img/speaker-right.webp)

3. Disconnect the speaker connector from the motherboard.
4. Replace the speaker, plug it into the `J_SPKR1` header, and replace the bottom cover.
