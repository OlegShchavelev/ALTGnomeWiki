---
aggregation:
  snap: hw-probe
  flatpak: org.linux_hardware.hw-probe
  sisyphus: hw-probe
appstream:
  id: org.linux_hardware.hw-probe
  name: Hardware Probe
  icon: /hw-probe/hw-probe-logo.png
  summary: A tool for testing the health of computer hardware and uploading the results to a Linux hardware database
  developer:
    name: Linux Hardware Project (linuxhw)
  metadata_license:
    name: LGPL-2.1-or-later/BSD-4-Clause
    link: https://www.gnu.org/licenses/
  url:
    homepage: https://linux-hardware.org/
    bugtracker: https://github.com/linuxhw/hw-probe/issues
gallery:
  title: Gallery
  type: slider
  images:
    - src: /hw-probe/hw-probe1.png
    - src: /hw-probe/hw-probe2.png
    - src: /hw-probe/hw-probe3.png
---

# Hardware Probe (hw-probe)

Hardware Probe (hw-probe) is a tool for testing the functionality of computer hardware and uploading the results to a Linux hardware database. Designed to make it easier to collect the history needed
to investigate hardware problems

Probe is a snapshot of your computer's hardware status and logs. The tool checks the health of devices by analyzing logs and returns a persistent URL in the public database [Linux Hardware](https://linux-hardware.org/) to view the computer scan.

<Gallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
<!--@include: @en/apps/.parts/install/content-snap.md-->
