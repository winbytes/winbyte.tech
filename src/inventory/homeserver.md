---
layout: ../../layouts/InventoryItemLayout.astro
title: 'OptiPlex 5050 - Home Server'
postDate: 2023-07-01
description: 'My unRAID based home server / NAS solution.'
image:
    url: '/images/5050.png' 
    alt: 'Dell OptiPlex 5050'
---
____________________________________________________________________________________________
This server comes in handy for accessing my data within and outside of my network. It was just set up a month or so ago as of writing this, and I hope to
find even more uses for it as time passes! It is powerful enough to host a game server for friends, run VMs as a hypervisor, or simply run Docker containers.
It was quite a task to manage to fit all of these drives inside this mini tower case..


Hardware Configuration:
<ul>
<li>Model: Dell OptiPlex 5050 MT
<li>CPU: Intel Core i5-7500 3.40GHz
<li>RAM: 32GB TEAMGROUP DDR4-3200 + 8GB SKhynix DDR4-2666
<li>UPS: APC Back-UPS BE600M1 (monitored via USB)
</ul>

Storage Configuration:
<ul>
<li>USB Boot Drive: 64GB SanDisk Cruzer Ultra Flair USB 3.0
<li>Parity HDD: 4TB Western Digital Red Plus
<li>Primary Storage: 4TB Seagate Barracuda Compute
<li>Secondary Storage: 1TB Seagate Barracuda
<li>Cache SSD: 256GB Samsung PM830 2.5"
</ul>

Software Configuration:
<ul>
<li>OS: unRAID
<li>Homebridge Server (for HomeKit integration)
<li>Tailscale for secure LAN access
<li>Nextcloud for easy photo backup
</ul>
