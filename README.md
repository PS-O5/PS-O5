<p align=center># Pratik Suryawanshi
### Embedded Systems Engineer → Systems Architect | Avionics · Autonomous Systems · Safety-Critical Firmware

*M.Sc. Scientific Computing — Elite Network of Bavaria, University of Bayreuth*
*Munich / Bavaria, Germany*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ps-o5/)
[![Email](https://img.shields.io/badge/Email-PatSuryawanshi@gmail.com-D14836?logo=gmail&logoColor=white)](mailto:patsuryawanshi@gmail.com)
![Status](https://img.shields.io/badge/Status-Open%20to%20Werkstudent%20%2F%20Full--Time-brightgreen)

---

## The Architecture Mindset

I build systems where failure is not recoverable and timing is not negotiable.

Three years across radar imaging, autonomous UAV stacks, and HPC numerical solvers have converged on a single discipline: **designing deterministic software architectures across the full hardware-software boundary** from register-level silicon up to distributed RTOS microkernel design.

My work lives in the intersection of control theory, real-time OS internals, and embedded compute constraints. I don't integrate systems, I architect them from the physics upward.

---

## What I've Shipped

### VANGUARD-PASIL — 500Hz Avionics Flight Stack
> *Apache NuttX · Bare-Metal C · STM32F411 · HIL Validation*

A hard real-time flight stack proving that deterministic avionics behavior is achievable at the microcontroller level without a full flight OS.

- **707 µs hard deadline** met consistently via asynchronous I/O decoupling and deliberate scheduler partitioning
- **7.5% SRAM footprint** (9.9 KB) through zero-dynamic-allocation architecture
- Custom NuttX character drivers written from scratch to expose raw IMU telemetry to a **7×7 Error-State Kalman Filter** with 4th-order Runge-Kutta integration
- Autonomous ToF-driven ground-proximity failsafe with deterministic trigger latency
- Full HIL validation pipeline for sensor-actuator timing verification

[→ Codebase & Technical Architecture](https://github.com/PS-O5/VANGUARD-PASIL)

---

### Real-Time Embedded MPC Engine (Current Sprint)
> *Pure C++17 · ARM Cortex-M4/M7 · Zero-Allocation · Active Development*

A constrained Model Predictive Control engine built from first principles — no libraries, no heap, no compromises on WCET.

- Warm-started **Fast Gradient Method (FGM)** with Nesterov acceleration for a 4-state, 1-input reaction-wheel inverted pendulum
- Compile-time matrix dimension resolution via C++17 templates (`std::array`); zero runtime overhead, zero heap fragmentation
- In-place **Cholesky decomposition** solver operating entirely on the stack, bypassing matrix inversion in real-time
- Memory layout maps solver kernel to **ITCM**, state matrices to **DTCM** for zero-wait-state processing
- AHB bus matrix isolation of display pipeline to eliminate CPU cache contention

---

### Automotive Safety Gateway (ASG)
> *QNX RTOS 8.0 · Raspberry Pi 4 · STM32F411 · POSIX VFS*

A distributed AMP architecture bridging a microkernel RTOS host with a bare-metal edge controller; modeled after production automotive gateway patterns.

- STM32 edge node mounted directly into the QNX microkernel filesystem at `/dev/asg_sensor` via a formal **POSIX VFS Resource Manager**
- ASIL-aware **Independent Watchdog (IWDG)** system with graceful degradation state machine
- POSIX UDP telemetry link for real-time network-layer diagnostics

[→ Architecture & LaTeX Technical Report](https://github.com/PS-O5/QNX-AMP-Gateway-Pi-4-Edge-Node)

---

### Wolf3D Bare-Metal Port
> *Bare-Metal C · STM32F411CEU6 · DMA · No OS*

A complete port of the 1992 Wolfenstein 3D raycasting engine onto bare-metal ARM: no OS, no framebuffer, 128 KB SRAM.

- "Slice & Stream" rendering pipeline: CPU computes column geometry in fixed-point trigonometry, **DMA asynchronously transfers** 16bpp RGB565 columns to ST7789 display
- Eliminates global framebuffer entirely — physics within silicon constraints
- Raw ADC analog joystick and timer-driven PWM audio through a piezo speaker

[→ Codebase & Architecture](https://github.com/PS-O5/wolf3d-stm32f411ceu6)

---

## Technical Stack

| Layer | Technologies |
|---|---|
| **RTOS & Kernels** | QNX 8.0, Apache NuttX, FreeRTOS (AMP/SMP), Zephyr, Embedded Linux (Yocto/Buildroot) |
| **Languages** | C, C++17/20 (bare-metal & STL), CUDA C++, Python, SystemVerilog |
| **Silicon** | STM32 Cortex-M4/M7, ESP32 (Xtensa Dual-Core), NVIDIA Jetson TX2, RISC-V, RPi 4 |
| **Protocols** | CAN, SPI, I2C, UART, USB, MAVLink, Micro-ROS (XRCE-DDS), UDP/TCP, LoRa |
| **Control & Estimation** | MPC, EKF/ESKF, Runge-Kutta Integration, Fixed-Point Math, Sensor Fusion |
| **HPC** | CUDA, OpenMP, MPI, H-Matrix arithmetic (AHMED library) |
| **Safety Standards** | ISO 26262, DO-178C, IEC 61508 — domain awareness across automotive, avionics, industrial |
| **Tools** | Git, CMake, Docker, Gazebo, MATLAB, Logic Analyzers, Oscilloscopes |

---

## Professional Experience

**Research Assistant — HPC & Numerical Methods**
*University of Bayreuth | Nov 2023 – Present*

Optimizing Hierarchical Matrix (H-Matrix) arithmetic for GPU-accelerated physics solvers (CUDA C++). Achieved 52% memory compression and 2× speedup over CPU baseline. Bridges dense and sparse linear algebra for large-scale simulations.

**Embedded Software Developer — Radar / SAR Imaging**
*Hyspace Technologies | Oct 2022 – Oct 2023*

Architected real-time radar signal pipelines on NVIDIA Jetson TX2. Delivered a **10× latency reduction** (13s → 1.3s) via CUDA parallelization, DMA, and Network-on-Chip optimization. Sustained **680 Mbps continuous throughput** across 6-channel multispectral double-precision sensor streams using zero-copy CPU/GPU memory interfaces.

**Embedded Systems & Mechanical Engineer**
*QSON Technologies | Feb 2022 – Sept 2022*

Full-cycle firmware development and hardware bring-up on STM32 and AVR platforms. Custom low-level drivers across UART, I2C, SPI.

---

## Education

**M.Sc. Scientific Computing** — University of Bayreuth, Germany *(Oct 2023 – Sept 2026)*
Elite Network of Bavaria | Focus: HPC, Numerical Methods, GPU-Accelerated Solvers

**B.E. Mechanical Engineering** — University of Mumbai *(2019)*
8.82 / 10 | Control Systems, Mechatronics, Machine Design

*Published research: Springer (IISc) · IEEE ICNGIS*

---

## Availability

Open to **Werkstudent**, and **full-time roles** in avionics, autonomous systems, space, or defense.
German: B2 | Immediate availability | Munich / Bavaria

---

*"Correctness at 707 microseconds. Every cycle accounted for."*
