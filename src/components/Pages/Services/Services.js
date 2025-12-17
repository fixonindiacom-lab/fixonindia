const services = [
   {
      id: "ref-1",
      name: "Power Issue",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e17b?auto=format&fit=crop&w=800&q=80",
      desc: "Diagnosis and repair of refrigerator power and electrical issues.",
    },
    {
      id: "ref-2",
      name: "Noise Issue",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      desc: "Fix unusual sounds caused by fans, compressors, or loose components.",
    },
    {
      id: "ref-3",
      name: "No Cooling",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e17b?auto=format&fit=crop&w=800&q=80",
      desc: "Restore cooling efficiency by checking gas, compressor, and airflow.",
    },
    {
      id: "ref-4",
      name: "Excess Cooling",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      desc: "Fix over-cooling issues that cause freezing inside the refrigerator.",
    },
    {
      id: "ref-5",
      name: "Water Leakage",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e17b?auto=format&fit=crop&w=800&q=80",
      desc: "Resolve water leakage problems from drain pipes or ice buildup.",
    },
    {
      id: "ref-6",
      name: "Door Issue",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      desc: "Repair loose doors, broken gaskets, or improper sealing issues.",
    },
    {
      id: "ref-7",
      name: "Less Cooling",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e17b?auto=format&fit=crop&w=800&q=80",
      desc: "Fix low cooling problems to keep food fresh and safe.",
    },
     {
      id: "ref-1",
      name: "Power Issue",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e17b?auto=format&fit=crop&w=800&q=80",
      desc: "Diagnosis and repair of refrigerator power and electrical issues.",
    },
    {
      id: "ref-2",
      name: "Noise Issue",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      desc: "Fix unusual sounds caused by fans, compressors, or loose components.",
    },
    {
      id: "ref-3",
      name: "No Cooling",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e17b?auto=format&fit=crop&w=800&q=80",
      desc: "Restore cooling efficiency by checking gas, compressor, and airflow.",
    },
    {
      id: "ref-4",
      name: "Excess Cooling",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      desc: "Fix over-cooling issues that cause freezing inside the refrigerator.",
    },
    {
      id: "ref-5",
      name: "Water Leakage",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e17b?auto=format&fit=crop&w=800&q=80",
      desc: "Resolve water leakage problems from drain pipes or ice buildup.",
    },
    {
      id: "ref-6",
      name: "Door Issue",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      desc: "Repair loose doors, broken gaskets, or improper sealing issues.",
    },
    {
      id: "ref-7",
      name: "Less Cooling",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e17b?auto=format&fit=crop&w=800&q=80",
      desc: "Fix low cooling problems to keep food fresh and safe.",
    },
      {
    id: "ac-1",
    name: "Jet Clean Service",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1581579185169-1c6c9e8e6f07?auto=format&fit=crop&w=800&q=80",
    desc: "Deep cleaning of your AC using high-pressure jet technology to remove dust, dirt, and bacteria for improved cooling efficiency.",
  },
  {
    id: "ac-2",
    name: "Foam Jet Clean Service",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?auto=format&fit=crop&w=800&q=80",
    desc: "Foam-based jet cleaning that thoroughly cleans internal AC components and enhances airflow and cooling performance.",
  },
  {
    id: "ac-3",
    name: "Less / No Cooling Repair",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1581579185169-1c6c9e8e6f07?auto=format&fit=crop&w=800&q=80",
    desc: "Repair service for AC units facing low or no cooling issues due to gas leakage, clogged filters, or faulty components.",
  },
  {
    id: "ac-4",
    name: "Power Issue Repair",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?auto=format&fit=crop&w=800&q=80",
    desc: "Complete diagnosis and repair of AC power issues including wiring, PCB faults, and electrical failures.",
  },
  {
    id: "ac-5",
    name: "Noise / Smell Repair",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1581579185169-1c6c9e8e6f07?auto=format&fit=crop&w=800&q=80",
    desc: "Fix unusual noises and unpleasant odors caused by fan issues, mold buildup, or loose internal parts.",
  },
  {
    id: "ac-6",
    name: "Water Leakage Repair",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?auto=format&fit=crop&w=800&q=80",
    desc: "Repair water leakage problems caused by blocked drain pipes, improper installation, or frozen coils.",
  },
  {
    id: "ac-7",
    name: "Gas Refill / Full Checkup",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1581579185169-1c6c9e8e6f07?auto=format&fit=crop&w=800&q=80",
    desc: "Complete AC gas refill along with pressure testing, leak detection, and full system performance check.",
  },
  {
    id: "ac-8",
    name: "AC Installation (Split)",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?auto=format&fit=crop&w=800&q=80",
    desc: "Professional split AC installation including mounting, piping, wiring, and proper system setup.",
  },
  {
    id: "ac-9",
    name: "AC Installation (Window)",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1581579185169-1c6c9e8e6f07?auto=format&fit=crop&w=800&q=80",
    desc: "Secure window AC installation ensuring proper sealing, electrical safety, and optimal cooling output.",
  },
  {
    id: "ac-10",
    name: "AC Uninstallation (Split)",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?auto=format&fit=crop&w=800&q=80",
    desc: "Safe removal of split AC units including gas recovery, wiring disconnection, and mounting removal.",
  },
  {
    id: "ac-11",
    name: "AC Uninstallation (Window)",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1581579185169-1c6c9e8e6f07?auto=format&fit=crop&w=800&q=80",
    desc: "Professional window AC uninstallation without damage to the unit or window frame.",
  },


];

export default services;
