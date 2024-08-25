const networkingConceptsAndCommands = [
  {
    topic: "Public vs. Private IP Address",
    description: {
      english:
        "IP addresses are like your home address but for devices on the internet. Public IPs are like your main home address that everyone can see and send things to. Private IPs are like your room number inside the house; only people inside the house can see it.",
      hindi:
        "Public IP matlab jo sabko dikhta hai, jaise ghar ka main address. Private IP matlab ghar ke andar ka address, jaise room ka number, jo sirf ghar wale dekh sakte hain.",
    },
    examples: [
      "Public IP: Used to access the internet and connect with other devices globally.",
      "Private IP: Used within a local network like your home Wi-Fi.",
    ],
  },
  {
    topic: "Public IP-Address",
    description: {
      english:
        "A public IP is what your router uses to communicate with the outside world (internet). If you have a public IP, you can set up things like a web server or CCTV camera that can be accessed from anywhere in the world.",
      hindi:
        "Public IP ka matlab hai aapka router duniya se baat kar sakta hai. Aap server, CCTV camera laga sakte ho jo kahin se bhi access kiya ja sakta hai.",
    },
    examples: [
      "Setting up a web server at home using your public IP so it can be accessed globally.",
    ],
  },
  {
    topic: "Private IP-Address",
    description: {
      english:
        "Private IP addresses are for devices within your home or office. They don't connect directly to the internet and are only for local communication.",
      hindi:
        "Private IP matlab ghar ke andar wali devices ke liye. Yeh directly internet se nahi julti, bas ghar ke andar hi kaam karti hain.",
    },
    examples: [
      "Your phone, laptop, and smart TV at home communicating over the same Wi-Fi network using private IPs.",
    ],
  },
  {
    topic: "DNS (Domain Name Server)",
    description: {
      english:
        "DNS is like the phonebook of the internet. You type a website name (like google.com), and DNS tells your computer the website’s IP address so you can visit it.",
      hindi:
        "DNS internet ka phonebook hai. Aap website ka naam type karte ho, aur DNS aapke computer ko batata hai uska address.",
    },
    examples: [
      "Typing 'google.com' in your browser, and DNS translates it to an IP address like '172.217.12.206'.",
    ],
    commands: ["nslookup google.com"],
  },
  {
    topic: "DHCP (Dynamic Host Configuration Protocol)",
    description: {
      english:
        "DHCP is like the auto-assignment of IP addresses for devices. When you connect a device to the network, DHCP gives it an IP automatically, so you don’t have to do it manually.",
      hindi:
        "DHCP matlab IP address ka automatic distribution. Device jaisi network pe connect hoti hai, IP address mil jata hai apne aap.",
    },
    examples: [
      "Connecting your phone to Wi-Fi and instantly getting an IP address assigned without doing anything.",
    ],
    commands: ["dhclient -v eth0"],
  },
  {
    topic: "Router",
    description: {
      english:
        "A router connects your home devices to the internet and helps them communicate with each other. It decides the best path for your data to travel on the internet.",
      hindi:
        "Router wo device hai jo aapke ghar ke devices ko internet se connect karta hai. Yeh decide karta hai data ko best rasta.",
    },
    examples: [
      "Your home Wi-Fi router connects your laptop, phone, and smart TV to the internet.",
    ],
    commands: ["route -n"],
  },
  {
    topic: "VirtualBox Networking",
    description: {
      english:
        "When using virtual machines, networking can be tricky. Two main modes are NAT (easy, safe but less visible) and Bridged (more connected but complex). NAT makes your virtual machine act like it's behind a router, and Bridged makes it appear as if it’s a part of your network directly.",
      hindi:
        "Virtual machine setup me networking thoda tricky hai. NAT simple hai, lekin aapka machine chhup jata hai. Bridged aapko network me direct dikhata hai, lekin thoda complex hai.",
    },
    examples: [
      "NAT Mode: Virtual machine can access the internet but cannot be accessed from the internet.",
      "Bridged Mode: Virtual machine can communicate directly with other devices on the network.",
    ],
    commands: [
      "VBoxManage modifyvm 'VM name' --nic1 nat",
      "VBoxManage modifyvm 'VM name' --nic1 bridged --bridgeadapter1 eth0",
    ],
  },
  {
    topic: "TCP & UDP",
    description: {
      english:
        "TCP and UDP are two ways data is sent over the internet. TCP is reliable (data is sent in order), and UDP is faster but less reliable (good for streaming).",
      hindi:
        "TCP aur UDP do tarike hain data bhejne ke. TCP reliable hai (data sahi sequence me jata hai), UDP fast hai par kabhi kabhi data miss ho jata hai (streaming ke liye best).",
    },
    examples: [
      "TCP: Used for web browsing, where you need all data to arrive correctly.",
      "UDP: Used for online gaming or video streaming, where speed is more important than accuracy.",
    ],
    commands: ["netstat -tuln"],
  },
  {
    topic: "ARP (Address Resolution Protocol)",
    description: {
      english:
        "ARP is like asking 'Who lives here?' when you know the house number but need to find out who’s inside. It helps your device find out the hardware address (MAC address) associated with an IP address.",
      hindi:
        "ARP aisa hai jaise aapko ghar ka number pata hai par andar kaun hai wo puchhna hai. Yeh aapke device ko hardware address (MAC address) batata hai jo IP address se linked hota hai.",
    },
    examples: [
      "When your computer needs to send data to another device in the same network, it uses ARP to find out where to send it.",
    ],
    commands: ["arp -a"],
  },
  {
    topic: "ifconfig",
    description: {
      english:
        "ifconfig is a command used to view or configure network interface settings. It shows IP addresses, subnet masks, and more.",
      hindi:
        "ifconfig ek command hai jo network settings dekhne ya configure karne ke liye use hoti hai.",
    },
    examples: ["To see all active network interfaces: ifconfig"],
    commands: ["ifconfig"],
  },
  {
    topic: "Disable Interface with ifconfig",
    description: {
      english:
        "You can disable a network interface (stop it from working) using this command.",
      hindi: "Aap network interface ko disable kar sakte ho is command se.",
    },
    examples: ["Disable the eth0 interface: ifconfig eth0 down"],
    commands: ["ifconfig eth0 down"],
  },
  {
    topic: "Change MAC Address with ifconfig",
    description: {
      english: "You can change the MAC address of your network interface.",
      hindi: "Aap apne network interface ka MAC address badal sakte ho.",
    },
    examples: [
      "Change MAC address of eth0: ifconfig eth0 hw ether 00:11:22:33:44:55",
    ],
    commands: ["ifconfig eth0 hw ether 00:11:22:33:44:55"],
  },
  {
    topic: "Enable Interface with ifconfig",
    description: {
      english:
        "You can enable a network interface (start it again) using this command.",
      hindi: "Aap network interface ko enable kar sakte ho is command se.",
    },
    examples: ["Enable the eth0 interface: ifconfig eth0 up"],
    commands: ["ifconfig eth0 up"],
  },
  {
    topic: "iwconfig",
    description: {
      english:
        "iwconfig is like ifconfig, but specifically for wireless network interfaces. It shows or configures wireless settings.",
      hindi:
        "iwconfig wifi ke liye use hota hai, jaise ifconfig networking ke liye.",
    },
    examples: ["View your wireless network details: iwconfig"],
    commands: ["iwconfig"],
  },
  {
    topic: "Kill Processes with airmon-ng",
    description: {
      english:
        "This command kills processes that might interfere with your wireless network interface.",
      hindi:
        "Yeh command aise processes ko band karta hai jo aapke wireless interface ko interfere karte hain.",
    },
    examples: ["Kill interfering processes: airmon-ng check kill"],
    commands: ["airmon-ng check kill"],
  },
  {
    topic: "Change Mode with iwconfig",
    description: {
      english:
        "You can switch between 'monitor' and 'managed' modes for your wireless interface using this command.",
      hindi:
        "Is command se aap apne wireless interface ka mode badal sakte hain, jaise 'monitor' aur 'managed'.",
    },
    examples: ["Change to monitor mode: iwconfig wlan0 mode monitor"],
    commands: ["iwconfig wlan0 mode monitor"],
  },
  {
    topic: "Monitor Mode with airmon-ng",
    description: {
      english:
        "This command enables monitor mode on your wireless network interface, allowing it to capture all wireless traffic.",
      hindi:
        "Yeh command monitor mode enable karta hai, jisse aap saara wireless traffic capture kar sakte hain.",
    },
    examples: ["Enable monitor mode: airmon-ng start wlan0"],
    commands: ["airmon-ng start wlan0"],
  },
  {
    topic: "Capture Packets with airodump-ng",
    description: {
      english:
        "This command captures data packets from nearby Wi-Fi networks, allowing you to analyze them.",
      hindi:
        "Yeh command nearby Wi-Fi networks ke data packets capture karta hai jo aap analyze kar sakte hain.",
    },
    examples: ["Capture data on channel 6: airodump-ng --channel 6 wlan0"],
    commands: ["airodump-ng wlan0", "airodump-ng --channel 6 wlan0"],
  },
  {
    topic: "Deauth Attack with aireplay-ng",
    description: {
      english:
        "This command disconnects devices from a Wi-Fi network by sending deauthentication packets.",
      hindi:
        "Yeh command deauthentication packets bhejkar devices ko Wi-Fi se disconnect kar deta hai.",
    },
    examples: [
      "Deauth attack on a specific BSSID: aireplay-ng --deauth 0 -a 00:11:22:33:44:55 wlan0",
    ],
    commands: ["aireplay-ng --deauth 0 -a 00:11:22:33:44:55 wlan0"],
  },
  {
    topic: "Fake Authentication with aireplay-ng",
    description: {
      english:
        "This command sends fake authentication requests to a Wi-Fi network, making it think you are a legitimate device.",
      hindi:
        "Yeh command fake authentication requests bhejti hai Wi-Fi network ko, taaki wo soche ki aap ek legitimate device ho.",
    },
    examples: [
      "Fake authentication to a Wi-Fi network: aireplay-ng --fakeauth 0 -a 00:11:22:33:44:55 -h 66:77:88:99:AA:BB wlan0",
    ],
    commands: [
      "aireplay-ng --fakeauth 0 -a 00:11:22:33:44:55 -h 66:77:88:99:AA:BB wlan0",
    ],
  },
  {
    topic: "Crack Wi-Fi Password with aircrack-ng",
    description: {
      english:
        "aircrack-ng is used to crack Wi-Fi passwords by analyzing data packets.",
      hindi:
        "aircrack-ng Wi-Fi passwords crack karne ke liye use hota hai by analyzing data packets.",
    },
    examples: ["Crack a captured WPA handshake: aircrack-ng output.cap"],
    commands: ["aircrack-ng output.cap"],
  },
  {
    topic: "Generate New Packet of IV with aireplay-ng",
    description: {
      english:
        "This command forces the Wi-Fi network to create new data packets, which can then be captured and analyzed.",
      hindi:
        "Yeh command Wi-Fi network ko naya data packet banane ke liye force karta hai, jo baad mein capture aur analyze kiya ja sakta hai.",
    },
    examples: [
      "Generate new ARP packets: aireplay-ng --arpreplay -b 00:11:22:33:44:55 -h 66:77:88:99:AA:BB wlan0",
    ],
    commands: [
      "aireplay-ng --arpreplay -b 00:11:22:33:44:55 -h 66:77:88:99:AA:BB wlan0",
    ],
  },
  {
    topic: "Find Devices with WPS Enabled Using wash",
    description: {
      english:
        "wash scans for devices with WPS enabled, which is often a security vulnerability.",
      hindi:
        "wash un devices ko scan karta hai jisme WPS enabled hai, jo ek security vulnerability ho sakti hai.",
    },
    examples: ["Scan for WPS-enabled devices: wash --interface wlan0"],
    commands: ["wash --interface wlan0"],
  },
  {
    topic: "Crack Password with WPS Using reaver",
    description: {
      english:
        "reaver is a tool for cracking WPS PINs to gain access to a Wi-Fi network.",
      hindi:
        "reaver ek tool hai jo WPS PIN crack karta hai taaki aap Wi-Fi network me ghus sako.",
    },
    examples: [
      "Crack WPS PIN: reaver --bssid 00:11:22:33:44:55 --channel 6 --interface wlan0 -vvv --no-associate",
    ],
    commands: [
      "reaver --bssid 00:11:22:33:44:55 --channel 6 --interface wlan0 -vvv --no-associate",
    ],
  },
  [
    {
      topic: "Changing the Keyboard Layout",
      description: {
        english:
          "Adjusting the keyboard layout ensures that you can type special characters correctly and use the keyboard effectively according to your locale.",
        hindi:
          "Keyboard layout ko adjust karna yeh sunishchit karta hai ki aap special characters sahi se type kar sakein aur apne locale ke anusaar keyboard ka sahi upayog kar sakein.",
      },
      examples: [
        "Using 'sudo dpkg-reconfigure keyboard-configuration' to change the keyboard layout via the terminal.",
      ],
      commands: [
        "sudo dpkg-reconfigure keyboard-configuration",
        "sudo service keyboard-setup restart",
      ],
    },
    {
      topic: "Updating Kali Linux",
      description: {
        english:
          "Updating your system ensures that you have the latest security patches and software updates. This step is crucial for maintaining system stability and security.",
        hindi:
          "System ko update karna sunishchit karta hai ki aapke paas latest security patches aur software updates hain. Yeh step system ki stability aur security banaye rakhne ke liye mahatvapurn hai.",
      },
      examples: [
        "Running 'sudo apt update -y && sudo apt upgrade -y' to update and upgrade all installed packages.",
      ],
      commands: [
        "sudo apt update -y && sudo apt upgrade -y",
        "sudo apt autoremove -y",
        "sudo apt update && sudo dist-upgrade -y",
      ],
    },
    {
      topic: "Changing Default Password",
      description: {
        english:
          "Changing the default password helps secure your system from unauthorized access by ensuring that the default credentials are no longer in use.",
        hindi:
          "Default password ko change karna aapke system ko unauthorized access se secure karta hai aur ensure karta hai ki default credentials ka upayog na ho.",
      },
      examples: [
        "Using 'passwd' to change the default password for the current user.",
      ],
      commands: ["passwd", "sudo passwd root"],
    },
    {
      topic: "Taking a Snapshot (VM only)",
      description: {
        english:
          "Taking a snapshot of your VM allows you to save the current state of your system. This is useful for reverting to a stable state if any issues arise.",
        hindi:
          "VM ka snapshot lena aapke system ki current state ko save kar leta hai. Yeh useful hai agar koi issue aata hai to aap stable state par wapas ja sakte hain.",
      },
      examples: [
        "Creating a snapshot in VirtualBox to save the state of a fresh installation.",
      ],
      commands: ["VirtualBox UI steps to create a snapshot"],
    },
    {
      topic: "Creating a Low Privileged User Account",
      description: {
        english:
          "Creating a low-privileged user account helps in enhancing security by preventing unnecessary access to root privileges.",
        hindi:
          "Low-privileged user account banana security ko enhance karta hai aur root privileges ke unnecessary access ko prevent karta hai.",
      },
      examples: [
        "Creating a new user with 'sudo adduser username' and adding it to the sudo group.",
      ],
      commands: [
        "sudo adduser username",
        "sudo usermod -aG sudo username",
        "sudo chsh -s /bin/bash username",
      ],
    },
    {
      topic: "Installing Guake Terminal",
      description: {
        english:
          "Guake Terminal provides a convenient drop-down terminal interface, which can enhance productivity and ease of use for frequent terminal tasks.",
        hindi:
          "Guake Terminal ek convenient drop-down terminal interface provide karta hai, jo frequent terminal tasks ke liye productivity aur ease of use ko enhance karta hai.",
      },
      examples: [
        "Installing Guake Terminal with 'sudo apt-get install guake' and configuring it to start automatically.",
      ],
      commands: [
        "sudo apt-get install guake",
        "sudo cp /usr/share/applications/guake.desktop /etc/xdg/autostart/",
      ],
    },
    {
      topic: "Customizing Your Terminal",
      description: {
        english:
          "Customizing your terminal helps improve your workflow by tailoring the appearance and functionality to your preferences.",
        hindi:
          "Terminal ko customize karna aapke workflow ko improve karta hai by tailoring appearance aur functionality ko aapke preferences ke according.",
      },
      examples: [
        "Switching from Bash to ZSH for an enhanced terminal experience.",
      ],
      commands: [],
    },
    {
      topic: "Installing Your Favorite Code Editor",
      description: {
        english:
          "Installing a code editor like Visual Studio Code provides a powerful environment for coding, debugging, and managing your development projects.",
        hindi:
          "Code editor jaise Visual Studio Code install karna aapko coding, debugging, aur development projects manage karne ke liye ek powerful environment provide karta hai.",
      },
      examples: [
        "Installing Visual Studio Code using 'sudo apt install ./code_yourversion_amd64.deb'.",
      ],
      commands: ["sudo apt install ./code_yourversion_amd64.deb"],
    },
    {
      topic: "Installing OpenVAS",
      description: {
        english:
          "OpenVAS is a comprehensive vulnerability scanner that helps in identifying and managing security vulnerabilities in your system.",
        hindi:
          "OpenVAS ek comprehensive vulnerability scanner hai jo aapke system mein security vulnerabilities ko identify aur manage karne mein madad karta hai.",
      },
      examples: [
        "Using OpenVAS to run security scans and identify potential issues.",
      ],
      commands: [],
    },
    {
      topic: "Installing Your Favorite Tools",
      description: {
        english:
          "Installing various ethical hacking tools according to your needs can enhance your cybersecurity capabilities and make your work more efficient.",
        hindi:
          "Aapke needs ke according alag-alag ethical hacking tools install karna aapki cybersecurity capabilities ko enhance kar sakta hai aur aapke work ko zyada efficient bana sakta hai.",
      },
      examples: [
        "Installing tools like Burp Suite, Metasploit, and Hydra to perform various security tasks.",
      ],
      commands: [],
    },
    {
      topic: "Setting Up a VPN",
      description: {
        english:
          "Setting up a VPN helps in securing your internet connection by masking your IP address and encrypting your network traffic.",
        hindi:
          "VPN setup karna aapke internet connection ko secure karta hai by masking your IP address aur encrypting your network traffic.",
      },
      examples: [
        "Installing NordVPN on Kali Linux to ensure secure and private internet access.",
      ],
      commands: [
        "sh <(curl -sSf https://downloads.nordcdn.com/apps/linux/install.sh)",
        "nordvpn login",
        "nordvpn connect",
      ],
    },
    {
      topic: "Educate Yourself!",
      description: {
        english:
          "Continuous learning and education are essential for staying updated with the latest developments in cybersecurity and improving your skills.",
        hindi:
          "Continuous learning aur education zaroori hai taaki aap latest developments se updated rahe aur apne skills improve kar sakein.",
      },
      examples: [
        "Enrolling in courses like 'Practical Ethical Hacking' by Heath Adams to enhance your cybersecurity skills.",
      ],
      commands: [],
    },
  ],
];

export default networkingConceptsAndCommands;
