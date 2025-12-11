# Bonobo WS (Parts & Repairs)

Many components in your Bonobo WS can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the battery](#replacing-the-battery)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the speakers](#replacing-the-speakers)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the keyboard](#replacing-the-keyboard)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (such as USB drives or Kensington locks) are unplugged or removed from the system.

**Part numbers:**
- Bottom panel: `6-39-X5803-013`

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to remove the bottom cover:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 14 bottom panel screws.

![Bottom panel screws](./img/bottom-panel-screws.webp)

3. Pull the bottom panel off, starting from the back.

## Replacing the battery:

The battery provides primary power whenever the system is unplugged.

**Part numbers:**
- The battery's model number is `X580BAT-8-98`.
- The battery's original part number is `6-87-X580S-94J01`.
- Third-party battery sellers may list one or both of these numbers, and may offer other compatible part numbers with the same model number. You can also [contact System76](https://support.system76.com) to purchase a replacement battery.

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

The Bonobo WS 16 supports up to 192GB (4x48GB) of DDR5 SO-DIMMs running in dual-channel configuration. The RAM speed depends on the rank and number of SO-DIMMs:

- Any number of single-rank SO-DIMMs will run at a speed of 4400MHz.
    - The 2x16GB (32GB total) factory configuration runs at this speed.
- A single dual-rank SO-DIMM will run at 4400MHz.
    - This configuration is not recommended because running in single-channel mode will result in lower performance than the equivalent capacity running in dual-channel mode at a slightly lower speed.
- More than one dual-rank SO-DIMM will run at 4000MHz.
    - All other factory configurations run at this speed.

If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Press the small tabs on both sides of the RAM apart from each other simultaneously. The RAM should spring up to an angle.

![RAM removal](./img/ram-slots.webp)

3. Remove the RAM from the slot.
4. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down on the RAM until it clicks into place.
    - Either two or four SO-DIMMs (RAM sticks) are required. Using one or three SO-DIMMs is not supported.
    - If you're installing only two SO-DIMMs, place them on top of each other (within the same colored box as shown above)-- i.e. in slots 1 and 2 (highlighted yellow), *or* in slots 3 and 4 (highlighted cyan).

## Replacing an M.2/NVMe SSD:

This model supports up to four M.2 SSDs. All M.2 slots are size 2280 and support PCIe NVMe Generation 4.

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

**Part numbers:**
- Default wireless card: Intel `BE200`

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the M.2 SSD from slot 4](#replacing-an-m2nvme-ssd) (if installed).
2. Unscrew the wireless card screw holding the card and its wire bracket in place.
    - The card will lift up at an angle once unscrewed.

![Wireless card screw](./img/wireless-card-screw.webp)

3. Remove the metal bracket that holds the wires onto the card.
4. Gently remove the two antennas (highlighted red below) by pulling them up and away from the wireless card.

![Wireless card antennas](./img/wireless-card-antennas.webp)

5. Remove the card from the M.2 slot.
6. Insert the new wireless card into the M.2 slot at an angle.
7. Hold the card down and attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._
8. Replace the metal bracket and the retaining screw.
9. Replace the M.2 SSD in slot 4 (if necessary) and bottom panel.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the comptuer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Warning (ingestion hazard):** Keep batteries out of reach of children. Death or serious injury can occur if ingested. If a battery is suspected to be swallowed or inserted inside any part of the body, seek immediate medical attention. In the US, you can also call the National Battery Ingestion Hotline for guidance: [+1 (800) 498-8666](tel:18004988666)

**Part numbers:**
- The CMOS battery is a standard 3V KTS CR2032W battery.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
    - If you're clearing the CMOS, also [unplug the main battery](#replacing-the-battery).
2. Unplug the white connector that connects the CMOS battery to the motherboard's `J_RTC1` port (near SSD slot 2).
    - If you're replacing the battery, gently pull it up from where it's stuck to the case.

![CMOS battery](./img/cmos-battery.webp)

3. To clear the CMOS, open the lid of the machine and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
4. Re-connect the CMOS battery and the main battery.
5. Power up the Bonobo WS. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the speakers:

The system has three bottom-firing speakers, which can be removed and replaced individually.

**Part numbers:**
- Subwoofer: `6-23-5X580-0W2`
- Left speaker: `6-23-5X580-0L2`
- Right speaker: `6-23-5X580-0R2`

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the subwoofer:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the four silver screws holding the subwoofer onto the heatsink.

![Subwoofer screws & connector](./img/speaker-subwoofer.webp)

3. Unplug the subwoofer from the `J_SPKL5` port on the motherboard and remove it from the chassis.
4. Replace the subwoofer and bottom cover.

### Steps to replace the left and right speakers:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
    - For the right speaker, also [remove the M.2 SSD from slot 4](#replacing-an-m2nvme-ssd) (if installed).
2. Pull the speaker(s) off of the plastic posts.

![Audio daughterboard](./img/speakers-left-right.webp)

3. Disconnect the speaker connector(s) from the motherboard.
    - The left speaker (pictured on the right above) connects to `J_SPK1`.
    - The right speaker (pictured on the left) connects to `J_SPK2`.
4. Replace the speaker(s) and bottom cover.

## Replacing the cooling system:

The Bonobo WS 16 has a single heatsink assembly with two fans. This assembly cools the CPU and GPU.

If the fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. [Contact support](https://support.system76.com) to start a warranty claim or parts purchase. These instructions can also be used if physical damage to the heatsink necessitates its replacement.

Thermal paste helps facilitate effective heat transfer between the CPU/GPU and the cooling equipment; depending on your climate and the age of the machine, replacing the thermal paste may improve cooling performance. The thermal paste should generally be replaced whenever the heatsink is removed.

Thermal putty (thicker than thermal paste) is used to bridge the gap between the VRAM chips and the heatsink. Replacing the thermal putty is optional when removing the heatsink. System76 suggests [Thermal Grizzly Putty Basic](https://www.thermal-grizzly.com/en/tg-putty/s-tg-p-b-030) (available at various retailers) or a similar alternative.

**Part numbers:**
- Heatsink/fan assembly: `6-31-X580N-101`
- Individual fans (may not be available separately):
    - Left fan: Yingfan `NA901212HHT4B10001 DX1`
    - Right fan: Yingfan `NB901212HHT4B0001 DX2`

**Tools required:** Cross-head (Phillips) screwdriver, thermal putty spreader (flat plastic tool)  
**Time estimate:** 15 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the SSD from slot 1](#replacing-an-m2nvme-ssd) (if installed).
2. [Disconnect the subwoofer](#steps-to-replace-the-subwoofer) from the motherboard's `J_SPKL5` header.
    - You can optionally remove the subwoofer. In the photo below, the subwoofer has been removed to better illustrate the location of the heatsink screws.
3. Remove the fourteen heatsink and fan screws in order of the stamped numbers, starting with #1, then #2, and continuing until you have removed #14.
    - Screws #1-#12 are held captive, and will not completely detatch from the heatsink/fans.
    - Screws #13 and #14 are slightly smaller than the rest of the screws, and are not held captive.
    - Do not remove the smaller screws holding the fan covers onto the fans.

![Thermal screws](./img/thermal-system.webp)

4. Remove any clear tape covering the fan wires.
5. Unplug the black fan connectors from the motherboard's fan headers, `J_VGAFAN1` (highlighted red above) and `J_CPUFAN1` (highlighted green).
6. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
7. Using a paper towel, remove the existing thermal paste from the CPU, GPU, and heatsink. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.
    - In the below photos, the subwoofer is screwed into the heatsink, so its cable is visible in addition to the fan cables.
    - You can optionally remove the thermal putty from the eight VRAM chips surrounding the GPU chip if you have replacement thermal putty to install.

![Thermal paste removal](./img/thermal-paste-removal.webp)

8. Apply a small line of thermal paste directly onto the CPU chip and the GPU chip.
    - If you're also replacing the thermal putty, apply the new putty to the eight VRAM chips.
    - If you aren't replacing the thermal putty, scoop the existing putty (from the VRAM chip and the corresponding location on the heatsink) into the center of each VRAM chip using a flat plastic tool.

![Thermal paste application](./img/thermal-paste-application.webp)

9. Carefully replace the heatsink.
    - Make sure the tab on the end of the keyboard adhesive strip (highlighted green above) is fed through the slot in the heatsink (next to the GPU fan).
10. Tighten the fan and heatsink screws from #1 to #12, then reinstall the final two heatsink screws (#13 and #14).
11. Plug the black fan connectors back into the motherboard and (optionally) replace the clear tape holding down the CPU fan's cable.

## Replacing the keyboard:

The keyboard includes per-key RGB LED backlighting, and can be replaced using the instructions below.

**Warning:** Removing the keyboard may cause permanent aesthetic damage to the underside of the keyboard, particularly if the adhesive strip is not fully removed first. Removal is not recommended unless the keyboard is malfunctioning.

**Part numbers:**
- Keyboard:
    - Model number: `6-X580[D]WNT-G-KB-LPK-US`, also known as `CVM18H93US9430FA`
    - Part number: `6-80-PC510-013-1MD`

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
9. Carefully slide all three ribbon cables into their connectors.
10. Flip the black latches back into place to secure the ribbon cables.
11. (Optional) Replace the keyboard adhesive strip on the chassis, sliding the tab at the end through the adhesive strip access point.
12. Place the keyboard back into position, starting with the tabs on the bottom edge.
13. Secure the rest of the keyboard by pressing down on each of its edges.
14. Turn the machine lid-side down again.
15. Replace the bottom cover.
