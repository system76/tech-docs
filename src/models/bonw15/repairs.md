# Bonobo WS (Parts & Repairs)

Many components in your Bonobo WS can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the battery](#replacing-the-battery)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the speakers](#replacing-the-speakers)
- [Replacing the keyboard](#replacing-the-keyboard)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (such as USB drives or Kensington locks) are unplugged or removed from the system.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the bottom cover:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 16 bottom panel screws.

![Bottom panel screws](./img/bottom-panel-screws.webp)

3. Slide the back strip off the back of the machine.

![Bottom panel back strip](./img/bottom-panel-back-strip.webp)

4. Pull the bottom panel off, starting from the back.

## Replacing the battery:

The battery provides primary power whenever the system is unplugged.

The model number for the Bonobo WS 15's battery is `X270BAT-8-99`, and the original part number is `6-87-X270S-92B01`. Third-party battery sellers may list one or both of these numbers, and may offer other compatible part numbers with the same model number. You can also [contact System76](https://support.system76.com) to purchase a replacement battery.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the four screws along the top of the battery.

![Battery screws](./img/battery.webp)

3. Unplug the white connector connecting the battery to the motherboard.
4. Remove the battery, starting from the top edge with screw holes.
5. When putting in the new battery, start with the plastic tabs along the bottom edge (opposite from the screw holes.)
6. When plugging in the new battery, the red wire on the connector goes on the left, and the black wire goes on the right.

## Replacing the RAM:

The Bonobo WS 15 supports up to 96GB (2x48GB) of DDR5 SO-DIMMs running at 5600MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

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

This model supports up to three M.2 SSDs. All M.2 slots are size 2280 and support PCIe NVMe Generation 4.

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

Your Bonobo WS's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (E-key).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the wireless card. Remove any clear tape that is securing the wires.

![Wireless card](./img/wireless-card.webp)

3. Gently remove the two antennas (highlighted red above) by pulling them up and away from the wireless card.
4. Remove the retaining screw opposite the M.2 slot, highlighted yellow above.
5. The wireless card will pop up at an angle. Remove the card from the M.2 slot.
6. Insert the new wireless card into the M.2 slot at an angle.
7. Hold the card down and replace the retaining screw.
8. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the comptuer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Warning (ingestion hazard):** Keep batteries out of reach of children. Death or serious injury can occur if ingested. If a battery is suspected to be swallowed or inserted inside any part of the body, seek immediate medical attention. In the US, you can also call the National Battery Ingestion Hotline for guidance: [1 (800) 498-8666](tel:18004988666)

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unplug the white connector that connects the CMOS battery to the motherboard.
    - If you are replacing the battery, gently pull from the sides to pry it up from where it's stuck to the case.

![CMOS battery](./img/cmos-battery.webp)

3. To clear the CMOS, open the lid of the machine and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
4. Re-connect the CMOS battery and the main battery.
5. Replace the SSDs and wireless card (if necessary) and the bottom panel.
6. Power up the Bonobo WS. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

The Bonobo WS 15 has a single heatsink assembly with two fans. This assembly cools the CPU and GPU.

If the fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. [Contact support](https://support.system76.com) to start a warranty claim or parts purchase.

Depending on your climate and the age of the machine, it may be necessary to apply new thermal paste between the CPU/GPU and the heatsink. Thermal paste helps facilitate effective heat transfer between the CPU/GPU and the cooling equipment. These instructions can also be used in the unlikely event your heatsink needs to be replaced.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 15 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove any SSDs present in slots 2 and 3](#replacing-an-m2nvme-ssd).
2. Remove the thirteen heatsink and fan screws in order of the stamped numbers, starting with #1, then #2, and continuing until you have removed #13.
    - Screws #1-#12 are held captive, and will not completely detatch from the heatsink/fans. Screw #13 is not held captive, and will come loose when untightened.
    - Do not remove the smaller screws holding the fan covers onto the fans.

![Thermal screws](./img/thermal-screws.webp)

3. Remove any clear tape covering the fan wires.
    - The tape covering the [wireless card antennas](#replacing-the-wireless-card) may also need to be removed.
4. Unplug the black fan connectors from the motherboard.
5. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
6. Using a paper towel, remove the existing thermal paste from the CPU, GPU, VRAM chips, and heatsink. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

7. Apply a small line of thermal paste directly onto the CPU chip, GPU chip, and VRAM chips.

![Thermal paste application](./img/thermal-paste-application.webp)

8. Carefully replace the heatsink.
9. Replace the fan and heatsink screws, starting with #1, then #2, and so on until #13.
10. Plug the black fan connectors back into the motherboard and (optionally) replace the clear tape.

## Replacing the speakers:

The system has two bottom-firing speakers, which can be removed and replaced individually.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the left speaker:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove any SSDs present in slots 2 and 3](#replacing-an-m2nvme-ssd).
2. Remove the two screws holding the audio daugherboard onto the chassis, then flip the audio daughterboard over towards the motherboard.

![Audio daughterboard](./img/audio-daughterboard.webp)

3. Disconnect the speaker connector from the motherboard.
    - This can alternatively be done after freeing the speaker.

![Left speaker wire and screws](./img/speaker-left.webp)

4. Unscrew the two speaker screws, free the speaker wire from the channels in the chassis, and remove the speaker.
5. Screw in the new speaker and connect it to the motherboard, securing the wire using the channels in the chassis.
6. Replace the audio daughterboard and bottom cover.

### Steps to replace the right speaker:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Disconnect the speaker connector from the motherboard.
    - This can alternatively be done after freeing the speaker.

![Right speaker wire and screws](./img/speaker-right.webp)

3. Unscrew the two speaker screws and remove the speaker.
4. Screw in the new speaker and connect it to the motherboard.
5. Replace the bottom cover.

## Replacing the keyboard:

The keyboard includes per-key RGB LED backlighting, and can be replaced using the instructions below.

**Warning:** Removing the keyboard may cause permanent aesthetic damage to the underside of the keyboard, particularly if the adhesive strip is not fully removed first. Removal is not recommended unless the keyboard is malfunctioning.

**Tools required:** Cross-head (Phillips) screwdriver; tweezers (optional)  
**Time estimate:** 10 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the keyboard:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Pull the keyboard adhesive out of the machine to detatch it from the keyboard.
    - The adhesive strip access point is highlighted green below.
    - If the end of the keyboard adhesive strip is tucked behind the fan, it can be pulled out using tweezers or a small screwdriver, or the [thermal system can be removed](#replacing-the-cooling-system) to expose it.
        - Replacing the thermal paste is recommended if the thermal system is removed.
    - If the adhesive strip breaks, remove as much of it as possible. The keyboard can be reinstalled without the adhesive strip.

![Keyboard adhesive & push point](./img/keyboard-adhesive.webp)

3. Open the lid slightly and place the machine on its side.
4. Push a screwdriver into the keyboard push point (highlighted red above) until the keyboard pops out.

![Keyboard push point](./img/keyboard-push-point.webp)

5. Set the machine back down and raise the keyboard away from the chassis. The largest ribbon cable is for the keyboard, while the smaller ribbon cables are for the keyboard backlight.

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
15. Replace the bottom cover.
