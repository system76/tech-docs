# Pangolin (Parts & Repairs)

Many components in your Pangolin can be upgraded or replaced as necessary. Follow these step-by-step guides for instructions:

- [Replacing an M.2/NVMe SSD](#replacing-an-m2nvme-ssd)
- [Removing the bottom cover](#removing-the-bottom-cover)
- [Removing the battery](#removing-the-battery)
- [Replacing the WiFi/Bluetooth module](#replacing-the-wireless-card)
- [Replacing the CMOS battery](#replacing-the-cmos-battery)
- [Replacing the fans/heatsink/thermal paste](#replacing-the-cooling-system)
- [Replacing the speakers](#replacing-the-speakers)

## Replacing an M.2/NVMe SSD:

This model supports two M.2 SSDs. Both slots support PCIe NVMe Generation 4 connections and M.2 size 2280.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 3 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to replace the M.2 drive:

1. Unscrew the M.2 access door screw.

![M.2 access door](./img/m2-access-door.webp)

2. Pull the M.2 access door off, starting from the top (larger side).
    - A flat, plastic tool can be used to pry the edge of the door up.
    - If the door is difficult to remove, the M.2 drives can alternatively be accessed by [removing the bottom cover](#removing-the-bottom-cover).
3. Unscrew the retainer screw opposite the M.2 slot.

![M.2 slots](./img/m2-slots.webp)

4. Remove the existing M.2 drive by pulling it out of the slot.
5. Insert the new M.2 drive into the slot and hold it in place.
    - If a slot is being used for the first time, the spare thermal pad (which is included in the Pangolin's box) can be applied to the motherboard before placing the drive down on top of it.
6. Replace the retainer screw.

## Removing the bottom cover:

Removing the cover is required to access the internal components. Prior to removing the cover, ensure the AC power is unplugged and all peripherals (including SD cards and USB drives) are unplugged or removed from the system.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 5 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the bottom cover:

1. Place the machine lid-side down.
    - Use a soft surface (such as a towel) to avoid scratches.
2. Remove the 12 bottom panel screws.
    - The [M.2 access door screw](#replacing-an-m2nvme-ssd) does not need to be removed.

![Bottom panel screws](./img/bottom-panel-screws.webp)

3. Lift the bottom panel off, starting from the hinges in the back.

## Removing the battery:

The battery provides primary power whenever the system is unplugged.

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 10 minutes  
**Difficulty:** Easy <span style="color:green;">●</span>  

### Steps to remove the battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove the four battery screws, highlighted green below.

![Battery screws](./img/battery.webp)

3. Unplug the battery connector (highlighted cyan above) and lift the battery out of the chassis.

## Replacing the wireless card:

Your Pangolin's WiFi and Bluetooth are both handled by the same module. It is a standard M.2 2230 slot with PCIe and USB interfaces (A Key).

**Tools required:** Cross-head (Phillips) screwdriver  
**Time estimate:** 12 minutes  
**Difficulty:** Medium <span style="color:orange;">●</span>  

### Steps to replace the WiFi/Bluetooth module:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Locate the wireless module. Remove any clear tape that is securing the wires.

![Wireless card](./img/wireless-card.webp)

3. Gently remove the two antennas (highlighted red above) by pulling them up and away from the wireless card.
4. Remove the retaining screw opposite the M.2 slot, highlighted yellow above.
5. The wireless card will pop up at an angle. Remove the card from the M.2 slot.
6. Insert the new wireless card into the M.2 slot at an angle.
7. Replace the retaining screw.
8. Attach the two antennas by aligning the circular fittings and pressing onto the wireless card. The connectors will snap into place. _Use caution when attaching the connectors; the pins can bend, break, or snap._

## Replacing the CMOS battery:

The CMOS battery supplies power to the system's CMOS chip. UEFI settings and the computer's hardware clock are stored on the CMOS. If your system doesn't boot, you can reset the CMOS to force a low-level hardware reset. If your clock is constantly resetting, it's likely your CMOS battery needs to be replaced.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the CMOS battery:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Unplug the white connector attaching the CMOS battery to the motherboard (highlighted green below.)

![CMOS battery](./img/cmos-battery.webp)

3. If you are replacing the CMOS battery, carefully peel it away from the adhesive holding it to the motherboard.
4. To clear the CMOS, [disconnect the main battery](#removing-the-battery), open the lid of the machine, and hold down the power button for at least 15 seconds to discharge any residual energy in the system.
5. Re-connect the CMOS battery and the main battery, and replace the bottom panel.
6. Power up the machine. The system may power itself off and on after initial boot; this is normal behavior when the CMOS has been reset.

## Replacing the cooling system:

The Pangolin 12 has a fan and heatsink assembly to cool the CPU. The fans and heatsink are held together with adhesive; it is possible to replace the fans individually, but removing the entire assembly is recommended to perform service.

During normal operation, only the left fan will spin. The right fan is reserved in the embedded controller firmware for cooling a dedicated GPU, which the Pangolin 12 does not have.

If the fan becomes noisy and cleaning it out doesn't fix the issue, you may need a new fan. [Contact support](https://support.system76.com/) to start a warranty claim or parts purchase.

Depending on your climate and the age of the machine, it may be necessary to apply new thermal paste between the CPU and the heatsink. Thermal paste helps facilitate effective heat transfer between the CPU and the cooling equipment.

**Tools required:** Cross-head (Phillips) screwdriver, thermal paste  
**Time estimate:** 20 minutes  
**Difficulty:** High <span style="color:red;">●</span>  

### Steps to replace the fan/heatsink/thermal paste:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Remove any black tape that may be covering the fan screws and wires.
3. Remove the six fan screws, highlighted green below.

![Thermal screws](./img/thermal-system.webp)

4. Unplug the fan connectors, highlighted cyan above.
5. Unscrew the three heatsink screws, highlighted red above.
    - The heatsink screws are held captive and will not come out of the heatsink.
6. Remove the fan and heatsink assembly from the system, being careful not to bend the heatsink pipe. It may take some pressure to break the seal of the thermal paste.
    - The fans are held onto the heatsink with adhesive strips on both the top and bottom; if they come loose, place them back into position between the strips before reinstalling the fan/heatsink assembly.
7. Using a paper towel, remove the existing thermal paste. You may also use a small amount of rubbing alcohol if the old paste is dried or difficult to remove.

![Thermal paste removal](./img/thermal-paste-removal.webp)

8. After cleaning the CPU and heatsink, apply a small line of thermal paste directly onto the CPU chip.

![Thermal paste application](./img/thermal-paste-application.webp)

9. Carefully replace the heatsink.
10. Tighten the three heatsink screws.
11. Replace the fan screws and plug in the fan connectors.

## Replacing the speakers:

The system has two bottom-firing speakers. The speakers are a connected set, and must be replaced together.

**Tools required:** Cross-head (Phillips) screwdriver    
**Time estimate:** 10 minutes    
**Difficulty:** Medium <span style="color:orange;">●</span>

### Steps to replace the speakers:

1. Follow the steps above to [remove the bottom cover](#removing-the-bottom-cover).
2. Disconnect the left speaker (on the right side when the machine is upside-down) from the motherboard.
    - This can alternatively be done after freeing the speaker.

![Speaker wires and posts](./img/speakers.webp)

3. Pull both speakers up and off of the plastic posts.
4. Remove any tape necessary to free the wire between the left and right speakers.
5. Slide the new speakers onto the plastic posts, run the wire between the speakers through the channels in the chassis, and connect the left speaker to the motherboard.
