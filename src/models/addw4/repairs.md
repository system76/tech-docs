# Adder WS (Parts & Repairs)

Many components in your Adder WS can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the battery](#replacing-the-battery)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the keyboard](#replacing-the-keyboard)
- [Replacing the speakers](#replacing-the-speakers)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Part numbers:**
- The bottom panel's part number is `6-39-V3503-012`.

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

The Adder WS 4 supports up to 96GB (2x48GB) of DDR5 SO-DIMMs running at 5600MHz. If you've purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

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

## Replacing the battery:

The battery provides primary power whenever the system is unplugged.

**Part numbers:**
- The battery's model number is `V150BAT-4-53`, and the original part number is `6-87-V150S-51C01`.
   - Third-party battery sellers may list one or both of these numbers, and may offer other compatible part numbers with the same model number.
   - You can also [contact System76](https://support.system76.com) to purchase a replacement battery.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the five battery screws near the corners of the battery.

![Battery screws](./img/battery.webp)

3. Unplug the white connector connecting the battery to the motherboard.
4. Remove and replace the battery.
5. When plugging in the new battery, the red wire on the connector goes on the left, and the black wire goes on the right.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Part numbers:**
- The CMOS battery is a standard 3V 3Y3 CR2032W battery.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 15 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the main battery](#replacing-the-battery).
    - If you are not replacing the CMOS battery, then removing the main battery is optional.

![CMOS battery](./img/cmos-battery.webp)

2. Unplug the small white connector that connects the CMOS battery to the motherboard. If you are replacing the battery, gently pull from the sides to pry it up from where it's stuck to the case.
3. To clear the CMOS, [disconnect the main battery](#replacing-the-battery) (if it's still installed), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
4. Reconnect the CMOS battery and reinstall the main battery.
5. Replace the bottom panel and power up the Adder WS. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the wireless card:

Your Adder WS's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (E-key).

**Part number:**
- The standard wireless card is an Intel `AX211NGW`.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the SSD from slot 1 (the innermost slot)](#replacing-an-m2nvme-ssd), if installed.
    - You can optionally remove the [SSD from slot 2](#replacing-an-m2nvme-ssd) for easier access.
2. Locate the wireless card. Remove any clear tape that is securing the wires.

![Wireless card](./img/wireless-card.webp)

3. Gently remove the two antennas (highlighted red above) by pulling them up and away from the wireless card.
4. Remove the retaining screw opposite the M.2 slot, highlighted yellow above.
5. The wireless card will pop up at an angle. Remove the card from the M.2 slot.
6. Insert the new wireless card into the M.2 slot.
7. Replace the retaining screw.
8. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._

## Replacing the cooling system:

The Adder WS 4 has a single heatsink assembly with two fans. This assembly cools the CPU and GPU.

If the fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. [Contact support](https://support.system76.com) to start a warranty claim or parts purchase.

Depending on your climate and the age of the machine, it may be necessary to apply new thermal paste between the CPU/GPU and the heatsink. Thermal paste helps facilitate effective heat transfer between the CPU/GPU and the cooling equipment. These instructions can also be used in the unlikely event your heatsink needs to be replaced.

**Part numbers:**
- The fan/heatsink assembly's manufacturer and part number is Yingfan `6-31-V350N-201`.
- The left fan (with stamped numbers 1/2/3) is a WINMA `EGC-85071S1-0AH`.
- The right fan (with stamped numbers 4/5/6) is a WINMA `ECG-79731S1-0AH`.


**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 25 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the SSD from slot 3](#replacing-an-m2nvme-ssd) (if installed).
2. Remove any clear tape that is securing the fan wires.
3. Remove the thirteen heatsink and fan screws in order of the stamped numbers, starting with #1, then #2, and continuing until you have removed #13.
    - The black screws (#1-#12) are held captive, and will not completely detatch from the heatsink/fans. The silver screw (#13) is not held captive, and will come loose when untightened.
    - Do not remove the smaller black screws holding the fan covers onto the fans.

![Thermal screws](./img/thermal-screws.webp)

4. Unplug the two black fan connectors from the motherboard (highlighted green above).
5. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
6. Using a paper towel, remove the existing thermal paste from the CPU, GPU, VRAM chips, and heatsink. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

7. Apply a small line of thermal paste directly onto the CPU chip, GPU chip, and VRAM chips.

![Thermal paste application](./img/thermal-paste-application.webp)

8. Carefully replace the heatsink.
9. Replace the fan and heatsink screws, starting with #1, then #2, and so on until #13.
10. Plug the two white fan connectors back into the motherboard.

## Replacing the keyboard:

The keyboard can be replaced if its switches or electronics have been damaged.

**Warning:** The keyboard is held in by a strip of adhesive in addition to one of the bottom panel screws and the perimeter clips. The adhesive may be difficult to remove from the keyboard and/or case, and while the keyboard should still be functional if removed carefully, it is possible that permanent aesthetic damage will occur to the bottom side of the keyboard during removal. Removal is not recommended unless the keyboard is malfunctioning.

**Part numbers:**
- The keyboard's part number is `6-V355SNC-KB-MCL-US`.
    - Keyboards shipped by System76 include a custom-printed Super key.

**Tools required:** Cross-head (Phillips) screwdriver, tweezers, spudger tool (optional)  
**Time estimate:** 20 minutes  
**Difficulty:** Hard <span style="color:red;">●</span>

### Steps to replace the keyboard:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Pull the keyboard adhesive out of the machine to detatch it from the keyboard.
    - The adhesive strip access point is highlighted green below.
    - If the end of the keyboard adhesive strip is tucked behind the fan, it can be pulled out using tweezers or a small screwdriver, or the [thermal system can be removed](#replacing-the-cooling-system) to expose it.
        - Replacing the thermal paste is recommended if the thermal system is removed.
    - Pull the adhesive strip slowly to avoid breaking it. Grasp farther down the strip as it comes out of the machine (don't pull the end far away from the machine.)
    - If the adhesive strip breaks, remove as much of it as possible. The keyboard can be reinstalled without the adhesive strip.

![Keyboard adhesive access point & push point](./img/keyboard-mount-points.webp)

3. Open the lid slightly and place the machine on its side.
4. Push the screwdriver into the keyboard push point (highlighted red above) until the keyboard pops out.

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
14. Turn the machine lid-side down again.
15. Replace the bottom panel.

## Replacing the speakers:

The system has two bottom-firing speakers, which can be removed and replaced individually.

**Part numbers:**
- The left speaker's model number is `V350-L-BASS`, and its part number is `6-23-5V350-0L0`.
- The right speaker's model number is `V350-R-BASS`, and its part number is `6-23-5V350-0R0`.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the speakers:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
    - For the right speaker, also [remove the SSD from slot 2 (the outermost slot)](#replacing-an-m2nvme-ssd), if installed.
    - For the left speaker, you can optionally [remove the main battery](#replacing-the-battery) to make it easier to free the wire from the channels in the chassis.
2. Unscrew the silver screws holding the speaker in place.
    - The right speaker is secured by three screws; the left speaker is secured by two screws.
    - The screws are surrounded by rubber stabilizer rings, which may hold the screws in place after they're fully unscrewed. 

![Left speaker wire and posts](./img/speakers.webp)

3. Disconnect the speaker connector from the motherboard.
4. Connect the new speaker to the motherboard and screw it into the chassis.
5. Replace the outermost SSD (if necessary) and bottom cover.

