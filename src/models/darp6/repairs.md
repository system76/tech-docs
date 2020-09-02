# Bonobo WS (Parts & Repairs)

Many components in your Bonobo WS can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Removing the bottom cover](#removing-the-bottom-cover)
- [Removing the battery](#removing-the-battery)
- [Replacing the keyboard](#replacing-the-keyboard)
- [Replacing the RAM](#replacing-the-ram)
- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the CPU](#replacing-the-cpu)
- [Replacing the GPU](#replacing-the-gpu)

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the bottom cover:

1. Remove the 8 bottom panel screws (highlighted red below.)

![Bottom panel screws](./img/bottom-panel-screws.jpg)

2. Slide the bottom panel away from the battery slot while lifting it up and off of the case (the panel detaches at a slight angle.)

## Removing the battery:

The battery provides primary power whenever the system is unplugged.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover). _(Removing the bottom cover is optional, but can make removing the battery significantly easier.)_
2. Slide the locking battery slider (highlighted green below) to the "unlocked" position.

![Battery sliders](./img/battery-sliders.jpg)

3. Hold the spring-loaded battery slider (highlighted yellow above) in the "unlocked" position.
4. Starting from the top, lift the battery up and out of the slot.

## Replacing the keyboard:

The keyboard can be replaced using the instructions below.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the keyboard:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the battery](#removing-the-battery).
2. Remove the two keyboard screws (circled yellow below.)

![Keyboard screws](./img/keyboard-screws.jpg)

3. Open the lid slightly and place the machine on its side.
4. Push the screwdriver into the keyboard push point (highlighted cyan above) until the keyboard pops out.

![Keyboard push point](./img/keyboard-push-point.jpg)

5. Set the Bonobo WS back down and raise the keyboard away from the chassis. The largest ribbon cable (highlighted red below) is for the keyboard, while the two smaller ribbon cables (highlighted green) are for the keyboard backlight.

![Keyboard ribbons](./img/keyboard-ribbons.jpg)

6. Flip the black latches upwards to free the ribbon cables.
7. Pull the ribbon cables out of the connectors.
8. Remove the keyboard and replace it with the new one.
9. Carefully slide all three ribbon cables into their connectors.
10. Flip the black latches back into place to secure the ribbon cables.
11. Place the keyboard back into position, starting with the tabs on the bottom edge.
12. Secure the rest of the keyboard by pressing down on each of its edges.
13. Turn the machine lid-side down again.
14. Replace the 2 keyboard screws, the battery, and the bottom panel.
15. Boot the machine and confirm the keyboard and keyboard backlight are operational.

## Replacing the RAM:

The Bonobo WS 14 supports up to 128GB (4x32GB) of DDR4 SO-DIMMs running at 3200MHz. If you're purchased new RAM, need to replace your RAM, or are reseating your RAM, follow these steps.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the RAM:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the battery](#removing-the-battery).
2. Two RAM slots are located on the bottom of the machine, while two are underneath the keyboard. If necessary, follow the steps above to [remove the keyboard](#replacing-the-keyboard).
3. Press the small tabs on both sides of the RAM simultaneously. The RAM should spring up to an angle.

![RAM removal](./img/ram-slots.jpg)

4. Remove the RAM from the slot.
5. Insert the new RAM (or reseat the existing RAM) by placing it in the keyed slot and pressing down on the RAM until it clicks into place.

## Replacing an M.2/NVMe SSD:

This model supports up to four M.2 SSDs. All M.2 slots are size 2280.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drive:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the battery](#removing-the-battery).
2. If working with any of the PCIe NVMe-capable slots, unscrew the three screws (highlighted red below) and remove the black metal cover from above those three slots.

![M.2 cover](./img/m2-cover.jpg)

3. Unscrew the retainer screw opposite the M.2 slot.

![M.2 slots](./img/m2-slots.jpg)

_In the above photo, the red slot is SATA only, the yellow slot is PCIe NVMe only, and the two orange slots work with SATA or PCIe NVMe._

4. Remove the existing M.2 drive by pulling it out of the slot.
5. Insert the new M.2 drive into the slot and hold it in place.
6. Replace the retainer screw.

## Replacing the wireless card:

Your Bonobo WS's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (A Key).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover), [remove the battery](#removing-the-battery), and [remove the keyboard](#replacing-the-keyboard).
2. Locate the wireless module. Remove any clear tape that is securing the wires.

![Wireless card](./img/wireless-card.jpg)

3. Gently remove the two antennas (highlighted red above) by pulling them up and away from the wireless card.
4. Remove the retaining screw opposite the M.2 slot, highlighted green above.
5. The wireless card will pop up at an angle. Remove the card from the M.2 slot.
6. Insert the new wireless card into the M.2 slot at an angle.
7. Replace the retaining screw.
8. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._
9. Replace the keyboard, battery, and bottom cover.

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the comptuer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Easy <span style="color:green;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the main battery](#removing-the-battery).
2. Unplug the white connector attaching the CMOS battery to the motherboard (highlighted green below.)

![CMOS battery](./img/cmos-battery.jpg)

3. If you are replacing the CMOS battery, pull it away from the adhesive holding it to the case.
4. To clear the CMOS, open the lid of the machine and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
5. Re-connect the CMOS battery, replace the main battery, and replace the bottom panel.
7. Power up the Bonobo WS. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

The Bonobo WS 12 has a single heatsink assembly with two fans for the CPU and GPU.

If the fans become noisy and cleaning them out doesn't fix the issue, you may need a new fan. Contact Support to start a warranty claim or parts purchase.

Depending on your climate and the age of the machine, it may be necessary to apply new thermal paste between the CPU/GPU and the heatsink. Thermal paste helps facilitate effective heat transfer between the CPU/GPU and the cooling equipment. These instructions can also be used in the unlikely event your heatsink needs replacing.

**Tools required:** Cross-head (Phillips) screwdriver, thermal paste  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover) and [remove the battery](#removing-the-battery).
2. Remove the three LED bar screws (highlighted green below).

![LED bar screws and connector](./img/led-bar-screws.jpg)

3. Raise the black latch on the ribbon cable connector (highlighted red above) to free the ribbon cable, then remove the ribbon cable; gently peel the cable away from any adhesive present.
4. Remove the LED light bar.
5. [Remove the black metal M.2 cover](#replacing-an-m2nvme-ssd). _Removing the M.2 cover is optional, but makes it easier to free the fan wires later._
6. Remove the eight fan screws (highlighted yellow below.)

![Thermal screws](./img/thermal-screws.jpg)

7. Remove the seven spring-loaded heatsink screws (highlighted cyan above) in reverse order, starting with #7, then #6, and continuing until you have removed #1. _Keep the four GPU heatsink screws separated from the three CPU heatsink screws; they are different sizes._
8. Unplug the white fan connectors from the black sockets on the motherboard (highlighted pink above.) Remove any clear tape holding the fan wires in place.
9. Remove the heatsink/fans from the case, being careful not to bend the heatsink pipes. It may take some pressure to break the seal of the thermal paste.
10. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-1.jpg)

![Heatsink assembly](./img/heatsink.jpg)

11. After cleaning the CPU, GPU, and heatsink, apply a small line of thermal paste directly onto the CPU and GPU chips.

![Thermal paste application](./img/thermal-paste-2.jpg)

12. Carefully replace the heatsink.
13. Replace the spring-loaded heatsink screws, starting with #1, then #2, and so on until #7. _The three screws over the CPU are slightly thicker, while the four screws over the GPU are slightly thinner._
14. Replace the eight fan screws.
15. Plug the white fan connectors back into the motherboard.

## Replacing the CPU:

The Bonobo WS uses an LGA 1200 socket for the CPU. If you are upgrading or replacing your CPU, follow the steps below.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 25 minutes    
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the CPU:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover), [remove the battery](#removing-the-battery), and [remove the heatsink](#replacing-the-cooling-system).
2. Lift up the lever holding the CPU cover in place, highlighted red below.

![CPU lever (lowered)](./img/cpu-lever-1.jpg)

![CPU lever (raised)](./img/cpu-lever-2.jpg)

3. Flip over the CPU cover.

![CPU cover](./img/cpu-cover.jpg)

4. Carefully lift the old CPU out of the socket. **Caution:** Be careful not to bend any of the gold pins in the CPU socket, and do not touch the gold plates on the bottom of the CPU.
5. Carefully place the new CPU into the socket. One of the corners of the socket and CPU are marked with a triangle; be sure to match the triangles to the same corner so the CPU is placed in the correct orientation (highlighted yellow below.)

![Triangle on socket](./img/cpu-triangle.jpg)

6. Once the CPU is placed in the correct orientation, replace the CPU cover and lower the lever back down; lowering the lever may take some force.

![CPU lever (lowering)](./img/cpu-lever-3.jpg)

7. Replace the thermal paste, heatsink/fan(s), battery, and bottom panel.

## Replacing the GPU:

The Bonobo WS uses an MXM III slot for the GPU. If you are upgrading or replacing your GPU, follow the steps below.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 25 minutes    
**Difficulty:** High <span style="color:red;">●</span>

### Steps to replace the GPU:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover), [remove the battery](#removing-the-battery), and [remove the heatsink](#replacing-the-cooling-system).
2. Unplug the power cable, highlighted cyan below.


![GPU screws and connector](./img/gpu-screws.jpg)

3. Unscrew the two screws, highlighted red above.
4. Raise the GPU to an angle and remove it from the slot.

![GPU raised at an angle](./img/gpu-raised.jpg)

5. Place the new GPU (or reseat the existing GPU) into the slot at an angle, then hold it down and replace the screws and connector.
6. Replace the thermal paste, heatsink/fan(s), battery, and bottom panel.
