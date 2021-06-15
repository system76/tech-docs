# Launch (Usage & Customization)

The Launch Configurable Keyboard can be customized and personalized in a variety of ways. It is recommended to remove unplug all USB cables and devices from your Launch before changing keycaps or switches.

- [Connecting and Using the Launch](#connecting-and-using-launch)
- [Using the System76 Keyboard Configurator](#using-the-system76-keyboard-configurator)
- [Remapping with QMK](#remapping-with-qmk)
- [Removing and Installing Keycaps](#removing-and-installing-keycaps)
- [Removing and Installing Switches](#removing-and-installing-switches)
- [Removing the PCB](#removing-the-pcb)

## Connecting and Using Launch

![Launch ports](./img/launch-ports.png)

Using either the USB-C to USB-C cable or the USB-A to USB-C cable, connect to your computer via your Launch's center USB type C port. Due to the directionality of USB, your Launch will only work when connected to your computer via the center port. Launch should now be ready to type on, and the USB ports on the back are ready to connect devices to.

## Using the System76 Keyboard Configurator

![System76 Keyboard Configurator](./img/configurator.webp)

With the System76 Keyboard Configurator, you can customize the layout of your Launch to speed up your productivity or make your workflow more ergonomic. You can also customize your Launch's RGB backlighting to your liking.

The System76 Keyboard Configurator is available in the Pop!\_Shop if you are running Pop!\_OS, and downloads for all other major OSes can be found on our [downloads page](https://system76.com/accessories/launch/download).

Once installed, the configurator will display any configurable keyboards it finds connected to the system. If you are running Pop!\_OS on a System76 Open Firmware laptop, you will also be able to configure your laptop's built-in keyboard. 

To get started, click the "Configure Keyboard" button below the keyboard you wish to configure. To remap a key, first click on it to select it, then click the button you wish to map to the key below the keymap (scrolling down may be necessary). 

### Mapping and Using Layers

Using the layer selector at the top of the window, keys can be mapped on any of Launch's four layers. Map a key to "Access layer X" to make that layer active while that key is held, or use "Switch to Layer X" to change the entire keyboard to that layer. 

If you map a "Switch to" key, remember to map a "Switch to Layer 1" key on the higher layer so that you can get back. If that happens and you're "stuck" on a higher layer, you can return to layer 1 by unplugging your Launch and plugging it back in, since it always defaults to layer 1 when it powers on. 

### Special Keys

**Reuse:** The "Reuse" key allows a key to do default to the layer below it. For example, if "a" is mapped on layer 1, and the same key is mapped to Reuse on layer 2, the key will act as if it is mapped to "a", even when pressed from layer 2. The Reuse key will fall through multiple layers if it is also mapped to Reuse on layers below it.

**None:** The "None" key effectively maps nothing to that key. Pressing a key mapped to "None" will do nothing. 

**Reset:** The "Reset" key puts your Launch into firmware updating mode. When Launch is in firmware updating mode, the RGB backlights will scroll in a horizontal pattern, and the letters "U N L O C K E D" will light up in white, one by one. The purpose of this is to provide visual confirmation that your firmware is unlocked and ready to flash firmware. Since this pattern is impossible to spoof, it provides visual confirmation that your bootloader is unlocked. This is a security feature to prevent firmware from being flashed without the user's knowledge.

### Customizing LEDs

To customize the LEDs on your Launch, switch from the "Keymap" tab to the "LEDs" tab using the button above the keymap. Since the LEDs on Launch can be customized on each layer independently, you will also see the layer selector when on the "LEDs" tab. 

The "Layer Color Pattern" selector will allow you to choose between different patterns, including solid colors, per key colors, or disabling the LEDs entirely.

