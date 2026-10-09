/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Mail, MapPin, Briefcase, Check, ArrowUpRight, Building2, Map, Layout, Layers, GraduationCap, Compass, Navigation, Users, ChevronLeft, ChevronRight, Instagram, Phone, Send, X } from "lucide-react";

const PROJECTS = [
  {
    title: "Triplicane CBD Revitalization",
    role: "Urban Designer @ CitiStrata",
    stakeholder: "Ministry of Housing and Urban Affairs (MoHUA)",
    description: "94.17 Ha master planning for the historic core of Chennai. Developed GIS land assessments and character zone delineations for MoHUA.",
    tags: ["Master Planning", "GIS", "MoHUA"],
    icon: <Building2 size={24} strokeWidth={1} />,
    modal: {
      keyPosition: "Urban Designer",
      stakeholders: "CMDA, & Ministry of Housing and Urban Affairs",
      siteAreaCost: "94.17 Ha of ward 116 (Triplicane with adjacent portions of Marina Beach), 98 Crores sanctioned for Shot Term Revitalization and Ongoing Technical Committee Review by MoHUA, on sanctions for long term Redevelopment potential.",
      responsibilities: "master planning, GIS-based land assessments, character zone delineations, land amalgamation & compensation strategies, community engagement, and report writing."
    }
  },
  {
    title: "Chennai Shoreline Masterplan",
    role: "Urban Designer @ INI Design Studio",
    stakeholder: "World Bank & CMDA",
    description: "84 sq.km Comprehensive Shoreline Development Plan. Executed climate resilience mapping and traffic flow analysis for the World Bank.",
    tags: ["Climate Action", "World Bank", "CMDA"],
    icon: <Map size={24} strokeWidth={1} />,
    modal: {
      keyPosition: "Urban Designer",
      stakeholders: "Chennai Metropolitan Development Authority, The World Bank, NIOT, NCSCM, Water Resource Department, Directorate of Environment, Fisheries Department, Fishing Communities and Related Coastal influencing Stakeholders",
      siteAreaCost: "84 sq.km. of Chennai’s Shoreline, covering HTL to first arterial road of Ward boundaries from Ennore on North to Kovalam on South. The project was initially in the state assembly on 2022 by the Chief Minister of Tamil Nadu, to be Part of the Third Master Plan of Chennai, 2026, 100 crores sanctioned by the State Government for project consultation till, on ground construction funded by The World Bank",
      responsibilities: "Assisted in formulation of Vision, Principles, Goals and Objectives of CSDP, worked on Detailed assessments for GIS analysis’s such as Water resilience Mapping, Flood Inundation Mapping, Optimal Traffic flow analysis, Landownership assessments, etc., worked on condition mapping, Activity Mapping along with citizen surveys, Government Official consultation, focused area consultations, and currently working on final stages of Comprehensive Shoreline Development Master Plan."
    }
  },
  {
    title: "Pedestrian Pathway Redevelopment",
    role: "Urban Designer @ CitiStrata",
    stakeholder: "Greater Chennai Corporation (GCC)",
    description: "40 km of targeted pedestrian-oriented designs across Chennai (Zones 6, 10, 12, 13). Delivered detailed BoQs and stakeholder coordination.",
    tags: ["Pedestrian", "Mobility", "GCC"],
    icon: <Navigation size={24} strokeWidth={1} />,
    modal: {
      keyPosition: "Urban Designer",
      stakeholders: "BRR and SP Department of Greater Chennai Corporation",
      siteAreaCost: "40 km of Zone 06, 10, 12 13 (GCC), 53 Crores sanctioned and Tendered.",
      responsibilities: "Pedestrian Oriented Designs, Detailed Working Drawings, Bill of Quantities, related deliverables and Stakeholder & consultants Coordination."
    }
  },
  {
    title: "Junction Improvement",
    role: "Urban Designer @ CitiStrata",
    stakeholder: "BRR Department & GCC",
    description: "Pedestrian-led capacity improvements for 18 junctions in Chennai (Zone 12 & 13) for the BRR Department. Delivered Working Drawings & BoQs.",
    tags: ["Junction Design", "GCC"],
    icon: <Navigation size={24} strokeWidth={1} />,
    modal: {
      keyPosition: "Urban Designer",
      stakeholders: "Bus Road Routes Department Greater Chennai Corporation",
      siteAreaCost: "18 Junctions of Zone 12 & 13 (GCC),",
      responsibilities: "Pedestrian Oriented Designs, Detailed Working Drawings, Bill of Quantities, Junction Improvement Plans, related deliverables and Stakeholder Coordination."
    }
  },
  {
    title: "Veyilodu Vilaiyadi - Play Study",
    role: "Research Associate @ CitiStrata",
    stakeholder: "CitiStrata Research Foundation",
    description: "Study of unstructured children's play in Chennai’s Urban Commons. Synthesized urban data and child-led spatial playability parameters.",
    tags: ["Research", "Geospatial", "Commons"],
    icon: <Users size={24} strokeWidth={1} />,
    modal: {
      keyPosition: "Research Associate & Urban Designer",
      stakeholders: "Tamilnadu State Planning Commission, Tamilnadu State Land Use Research Board and Care Earth Trust.",
      siteAreaCost: "Delineated Study area includes Wards 66, 68, and 72 of Ambattur Zone",
      responsibilities: "Geospatial Analysis, Urban Data Synthesis, formulation of Child-led spatial playability Parameters, and Report Writing."
    }
  },
  {
    title: "Land Pooling Development",
    role: "Urban Research Intern @ CMDA",
    stakeholder: "Chennai Metropolitan Development Authority",
    description: "Parametric delineation of suitable plots for land-pooling on the Anna Salai Transit corridor, calculating open space logic.",
    tags: ["Parametric", "Land Pooling"],
    icon: <Layout size={24} strokeWidth={1} />,
    modal: {
      keyPosition: "Computational urban data analyst",
      stakeholders: "Chennai Metropolitan Development Authority, Government of Tamil Nadu, India.",
      siteAreaCost: "Not disclosed",
      responsibilities: "Parametric delineation of suitable plots for land-pooling with practical outcomes of open space availability for residents and commuters i.e., analyzing urban data, stimulating and calculating open space requirements of Anna Salai Transit corridor."
    }
  },
  {
    title: "Climate Action Masterplan",
    role: "Urban Research Intern @ CMDA",
    stakeholder: "Chennai Metropolitan Development Authority",
    description: "Computational analysis of open spaces along Anna Salai to address neighborhood outdoor local climate. Target: 2°C reduction.",
    tags: ["Climate Control", "Urban Cooling"],
    icon: <Map size={24} strokeWidth={1} />,
    modal: {
      keyPosition: "Urban designer and computational climate analyst",
      stakeholders: "Chennai Metropolitan Development Authority",
      siteAreaCost: "Not disclosed",
      responsibilities: "computational analysis of open spaces along the Anna salai transit corridor for sample climate module to address the possibilities of strategizing urban design regulations to reduce the neighborhood’s outdoor local climate by 2 degree Celsius"
    }
  },
  {
    title: "Climate Responsive Urban Fabric",
    role: "M.Arch Thesis @ SPA Vijayawada",
    stakeholder: "SPA Vijayawada (Academic Thesis)",
    description: "Framework for Anna Salai-Mount Road addressing heat stress and flood risk through context-sensitive morphological transformation.",
    tags: ["Urban Climate", "Thesis"],
    icon: <Layers size={24} strokeWidth={1} />
  },
  {
    title: "Tiruchirappalli Local Area Plan",
    role: "M.Arch Project @ SPAV",
    stakeholder: "SPA Vijayawada (Academic Project)",
    description: "Character-based area regulations for morphological transformation of Rock Fort & Chathiram Bus Stand, preserving history.",
    tags: ["Area Plan", "Heritage"],
    icon: <Building2 size={24} strokeWidth={1} />
  },
  {
    title: "Bijapur Walled City",
    role: "Master Planning @ SPAV",
    stakeholder: "SPA Vijayawada (Academic Project)",
    description: "Reviving city character by restoring functional sectors using community inclusive principles and water-sensitive urban regeneration.",
    tags: ["Master Planning", "Water"],
    icon: <Map size={24} strokeWidth={1} />
  },
  {
    title: "Inner City Reg: Vishakhapatnam",
    role: "Urban Regeneration @ SPAV",
    stakeholder: "SPA Vijayawada (Academic Project)",
    description: "Revitalizing port town inner city via sustainable infills, integrating modern infrastructure with cultural heritage preservation.",
    tags: ["Urban Infill", "Regeneration"],
    icon: <Building2 size={24} strokeWidth={1} />
  },
  {
    title: "Black Box Incubator",
    role: "B.Arch Thesis @ Anna University",
    stakeholder: "Council of Architecture (B.Arch Thesis)",
    description: "Post-apocalyptic Science & Technology Incubation Center at Kalo Dungar. A self-sustaining, disaster-resilient knowledge hub.",
    tags: ["Architecture", "Resilient Design"],
    icon: <Layers size={24} strokeWidth={1} />
  },
  {
    title: "TN Police Station Planning Model",
    role: "Junior Architect @ Allee Dezign Studio",
    stakeholder: "Tamil Nadu Police Department",
    description: "Developed typical 2D/3D built area regulations and special requirements for Tier 1 & 2 city police stations for Tamil Nadu Police.",
    tags: ["2D/3D Model", "Regulations"],
    icon: <Building2 size={24} strokeWidth={1} />,
    modal: {
      keyPosition: "Junior Architect and Project Lead",
      stakeholders: "Deputy Inspector General of Police, and Superintend of Police, Ramanathapuram, Tamil Nadu.",
      siteAreaCost: "Not disclosed",
      responsibilities: "Development of typical Built area regulations, Built form regulations and Building special requirements of police stations for tier 1 & 2 cities presented to Deputy Inspector General of Police, and Superintend of Police, Ramanathapuram, Tamil Nadu."
    }
  },
  {
    title: "Tiruchirapalli Collector’s Camp",
    role: "Conservationist @ Allee Dezign",
    stakeholder: "Tiruchirappalli District Admin",
    description: "Strategized conservation techniques for a 3-crore Colonial Gothic camp office renovation, including landscape design and tracking.",
    tags: ["Conservation", "Landscape"],
    icon: <Layers size={24} strokeWidth={1} />,
    modal: {
      keyPosition: "Architectural Conservationist and Project supervisor",
      stakeholders: "Tiruchirapalli Collectorate treasury",
      siteAreaCost: "3 Crores sanctioned for campus renovation by Tiruchirapalli Collectorate treasury",
      responsibilities: "strategizing Conservation techniques for Colonial Gothic camp office, landscaping meeting room, campus area and supervising timely executions on site."
    }
  },
  {
    title: "Appaswami Luxury Apartments",
    role: "Junior Architect @ Allee Dezign Studio",
    stakeholder: "Appaswamy Real Estates",
    description: "Detailed building plans, compliance checks, and high-end exterior/interior 3D modeling for a multi-complex luxury apartment.",
    tags: ["Interior Design", "Residential"],
    icon: <Building2 size={24} strokeWidth={1} />
  }
];

const EXPERIENCE = [
  {
    org: "CitiStrata",
    role: "Urban Designer & Research Associate",
    period: "2025 - Present",
    desc: "Master planning, pedestrian interventions in Chennai, GIS land assessments, and spatial playability research."
  },
  {
    org: "INI Design Studio",
    role: "Urban Designer",
    period: "2024 - 2025",
    desc: "Contributed to climate resilience mapping and comprehensive shoreline development planning for the World Bank."
  },
  {
    org: "School of Planning and Architecture, Vijayawada",
    role: "M.Arch in Urban Design",
    period: "2022 - 2024"
  },
  {
    org: "Chennai Metropolitan Development Authority (CMDA)",
    role: "Urban Research Intern",
    period: "2023",
    desc: "Conducted parametric delineation for land-pooling and computational outdoor local climate analysis."
  },
  {
    org: "Allee Dezign Studio",
    role: "Junior Architect & Conservationist",
    period: "2021 - 2022",
    desc: "Developed 2D/3D building plans, compliance checks, and structural conservation strategies."
  },
  {
    org: "Adhiyamaan College of Engineering",
    role: "B.Arch",
    period: "2016 - 2021"
  },
  {
    org: "Sainik School Amaravathinagar",
    role: "Secondary & Higher Secondary Education",
    period: "2012 - 2016"
  }
];

const SKILL_CATEGORIES = [
  {
    title: "Simulation & Analytics",
    skills: ["Grasshopper", "Dynamo BIM", "Ladybug", "Honeybee", "Speckle", "UrbanX", "GH-Python", "Big Data"]
  },
  {
    title: "Modeling & Drafting",
    skills: ["Rhino-3D", "AutoCAD", "Revit", "Sketchup", "Blender 3D", "3DS Max", "Autodesk Forma", "D5 Render", "V-Ray"]
  },
  {
    title: "GIS & Web Apps",
    skills: ["Arc-GIS", "QGIS", "Earth Engine", "Arc Urban", "Mapflow AI", "City Engine"]
  }
];

const WORKSHOPS = [
  { title: "Coastal Community Engagements & Surveys for CSDP", org: "PGOs, Master Plan & Nodal Development" },
  { title: "Intersectoral Meeting for Third Master Plan", org: "World Bank, CMDA & Technical Committees" },
  { title: "Climate Action Plan for Third Master Plan", org: "C40 Cities, Urban Management Center" },
  { title: "17th Annual Workshop of Latvian School of Architecture", org: "Proposal for Ukrainian Urban Areas Devastated by War" },
  { title: "Heritage Corridor in Kamarajar Promenade", org: "CitiStrata Research Foundation" },
  { title: "Inner City Regeneration", org: "Prof. Dr. Abhijit Shirodkar" },
  { title: "Communication in Urban Design", org: "Prof. Dr. Sujatha S Govada" },
  { title: "Master Planning in Practice", org: "Ar. Nidhi Agarwal" },
  { title: "Cities in the Age of Neo Liberal Economy", org: "Ar. Manu Mahajan" },
  { title: "Mapping Techniques in Urban Environments", org: "Rajeev Malagi" },
  { title: "Resilient Urban Mobility - Chennai", org: "A Shankar, MRICS" }
];

function BentoCard({ children, className = "", delay = 0, key }: { children: React.ReactNode, className?: string, delay?: number, key?: React.Key }) {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 0.6, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`editorial-card rounded-[4px] overflow-hidden flex flex-col relative group ${className}`}
    >
      <div className="relative z-10 flex flex-col h-full p-8 md:p-10 pointer-events-auto">
        {children}
      </div>
    </motion.div>
  );
}

export default function App() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const [position, setPosition] = useState(0);
  const [width, setWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(300);
  const [gapSize, setGapSize] = useState(24);
  const [isManualControl, setIsManualControl] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCopied, setIsCopied] = useState(false);
  const [isLinkedinCopied, setIsLinkedinCopied] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isOverFrame, setIsOverFrame] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof PROJECTS)[0] | null>(null);
  const movementTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeProject]);

  const handleContactClick = () => {
    // We do NOT preventDefault here, allowing the browser to natively handle the mailto: href link.
    // This securely copies to the clipboard immediately before the new tab/app launches!
    navigator.clipboard.writeText("koushiknarayanan5852@gmail.com").catch(err => console.error("Clipboard error", err));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleLinkedinClick = () => {
    // We do NOT preventDefault here, allowing the browser to natively handle the standard link transition.
    const url = "https://www.linkedin.com/in/koushikpeter5852";
    navigator.clipboard.writeText(url).catch(err => console.error("Clipboard error", err));
    setIsLinkedinCopied(true);
    setTimeout(() => setIsLinkedinCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    // Using mailto to trigger native email client since serverless API keys are not provided
    const mailtoUrl = `mailto:koushiknarayanan5852@gmail.com?subject=Portfolio Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
    window.location.href = mailtoUrl;
    
    // Optional success feedback state could go here
  };

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      const el = document.elementFromPoint(e.clientX, e.clientY);
      // We check if the mouse is hovering over an editorial card, a button, or the active modal
      if (el && el.closest('.editorial-card, .bg-\\[var\\(--color-surface\\)\\], button, a, .project-modal-bg')) {
        setIsOverFrame(true);
      } else {
        setIsOverFrame(false);
      }
      
      if (movementTimeoutRef.current) {
        clearTimeout(movementTimeoutRef.current);
      }
      movementTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (movementTimeoutRef.current) clearTimeout(movementTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      if (carouselRef.current && trackRef.current) {
        const cw = carouselRef.current.clientWidth;
        const gap = window.innerWidth >= 768 ? 32 : 24;
        setGapSize(gap);
        
        let newItemW = cw;
        if (window.innerWidth >= 1024) {
          newItemW = (cw - (gap * 3)) / 4;
        } else if (window.innerWidth >= 768) {
          newItemW = (cw - gap) / 2;
        }
        setItemWidth(newItemW);

        // Account for track width
        const tw = PROJECTS.length * newItemW + (PROJECTS.length - 1) * gap;
        setWidth(tw - cw);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    setTimeout(measure, 150);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const cardWidth = itemWidth + gapSize;

  useEffect(() => {
    if (isManualControl || isHovered || width <= 0) return;
    const interval = setInterval(() => {
      setPosition(prev => {
        let newPos = prev - cardWidth;
        if (newPos < -width) return 0;
        return newPos;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isManualControl, isHovered, cardWidth, width]);

  const handleNext = () => {
    setIsManualControl(true);
    setPosition(prev => {
      const nextPos = prev - cardWidth;
      return nextPos < -width ? 0 : nextPos;
    });
  };

  const handlePrev = () => {
    setIsManualControl(true);
    setPosition(prev => {
      const nextPos = prev + cardWidth;
      return nextPos > 0 ? -width : nextPos;
    });
  };

  const handleDragEnd = (_: any, info: any) => {
    setIsManualControl(true);
    // Add velocity for swipe momentum
    const targetOffset = position + info.offset.x + (info.velocity.x * 0.2);
    const closestIdx = Math.round(-targetOffset / cardWidth);
    const maxIdx = Math.ceil(width / cardWidth);
    
    let snappedIdx = Math.max(0, Math.min(closestIdx, maxIdx));
    let nextPos = -snappedIdx * cardWidth;
    
    if (nextPos < -width) nextPos = -width;
    if (nextPos > 0) nextPos = 0;
    
    setPosition(nextPos);
  };


  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white relative">
      
      {/* SVG Filter for Organic Symbiote Goo */}
      <svg className="fixed w-0 h-0 hidden pointer-events-none">
        <defs>
          <filter id="symbiote-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Cyber-Venom Symbiote Cursor */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ filter: "url(#symbiote-goo) drop-shadow(0px 0px 15px rgba(0, 229, 255, 0.4))" }}
      >
        {[...Array(9)].map((_, i) => {
          const isLeader = i === 0;
          // Leader is 80px, followers vary between 20px and 50px for organic breakdown
          const baseSize = isLeader ? 80 : 20 + ((i * 17) % 30);
          
          // Calculate a deterministic splash trajectory when hitting a frame
          const splashAngle = (i / 8) * Math.PI * 2;
          const splashDistance = isLeader ? 0 : 120 + ((i * 47) % 150); // Increased distance to emphasize splash spread
          const splashX = isLeader ? 0 : Math.cos(splashAngle) * splashDistance;
          const splashY = isLeader ? 0 : Math.sin(splashAngle) * splashDistance;
          
          return (
            <motion.div
              key={`symbiote-${i}`}
              className="absolute left-0 top-0 rounded-full bg-[#030303]"
              animate={{
                x: mousePosition.x - baseSize / 2 + (isOverFrame ? splashX : 0),
                y: mousePosition.y - baseSize / 2 + (isOverFrame ? splashY : 0),
                // Leader shrinks to 50%, followers shrink to 0 to completely absorb into the center.
                // When over a frame, EVERYTHING scales to absolutely 0 so it disappears.
                scale: isOverFrame ? 0 : (isMoving ? 1 : (isLeader ? 0.5 : 0)),
              }}
              transition={{
                x: { 
                  type: "spring", 
                  // When splashing, use much lower stiffness (slows expansion) and higher damping (smooth glide)
                  stiffness: isOverFrame ? 60 : (isLeader ? 500 : 200 - i * 15), 
                  damping: isOverFrame ? 18 : (isLeader ? 25 : 12 + (i % 4)), 
                  mass: isLeader ? 0.5 : 1 + i * 0.1 
                },
                y: { 
                  type: "spring", 
                  stiffness: isOverFrame ? 60 : (isLeader ? 500 : 200 - i * 15), 
                  damping: isOverFrame ? 18 : (isLeader ? 25 : 12 + (i % 4)), 
                  mass: isLeader ? 0.5 : 1 + i * 0.1 
                },
                scale: { 
                  type: "spring", 
                  // Very slow, dragging decay on the scale when splashing so the droplets are visible as they travel
                  stiffness: isOverFrame ? 40 : 100, 
                  damping: isOverFrame ? 15 : 15 
                }
              }}
              style={{ width: baseSize, height: baseSize }}
            />
          );
        })}
      </div>

      {/* Project Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              layoutId={`project-card-${activeProject.title}`}
              className="relative w-full max-w-[80vw] min-w-[300px] h-full max-h-[90vh] bg-[var(--color-surface)] border border-ink/20 rounded-[4px] shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
            >
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-surface/80 backdrop-blur-md border border-ink/10 text-ink/80 hover:text-accent hover:border-accent transition-colors"
              >
                <X size={20} />
              </button>
              
              {/* Left Column: Image Placeholder */}
              <div className="w-full md:w-1/2 bg-ink/5 border-r border-ink/10 flex flex-col items-center justify-center p-12 text-ink/40 relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-ink/5 to-transparent mix-blend-overlay pointer-events-none" />
                 <Map size={48} className="mb-4 text-ink/20" strokeWidth={1} />
                 <p className="text-sm font-semibold uppercase tracking-widest text-center">Project Image Area</p>
                 <p className="text-xs text-center mt-2 max-w-xs">A high-resolution image for "{activeProject.title}" will be displayed here.</p>
              </div>

              {/* Right Column: Project Details */}
              <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col overflow-y-auto">
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-16 h-16 rounded-[2px] border border-accent/30 flex items-center justify-center text-accent bg-accent/5 shadow-[0_0_15px_rgba(0,229,255,0.1)] shrink-0">
                    {activeProject.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold leading-tight text-ink mt-1 flex-1">{activeProject.title}</h3>
                </div>

                <div className="w-12 h-[1px] bg-ink/20 mb-8" />
                
                {/* PDF Project Descriptions formatted specifically */}
                {/* @ts-ignore - Some projects have this some don't */}
                {activeProject.modal ? (
                  <div className="space-y-6 text-sm lg:text-base text-ink/80 leading-relaxed mb-auto">
                    <div>
                      <strong className="text-ink font-bold text-base bg-surface">Key Position — </strong>
                      {/* @ts-ignore */}
                      {activeProject.modal.keyPosition}
                    </div>
                    <div>
                      <strong className="text-ink font-bold text-base bg-surface">Stakeholders — </strong>
                      {/* @ts-ignore */}
                      {activeProject.modal.stakeholders}
                    </div>
                    {/* @ts-ignore */}
                    {activeProject.modal.siteAreaCost && (
                      <div>
                        <strong className="text-ink font-bold text-base bg-surface">Site area & Cost — </strong>
                        {/* @ts-ignore */}
                        {activeProject.modal.siteAreaCost}
                      </div>
                    )}
                    <div>
                      <strong className="text-ink font-bold text-base bg-surface">Responsibilities — </strong>
                      {/* @ts-ignore */}
                      {activeProject.modal.responsibilities}
                    </div>
                  </div>
                ) : (
                  <div className="mb-auto">
                    <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">{activeProject.role}</p>
                    <div className="flex items-center gap-2 mb-6">
                      <Users size={12} className="text-ink/60" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-ink/60">{activeProject.stakeholder}</span>
                    </div>
                    <p className="text-base lg:text-lg text-ink/70 leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>
                )}
                
                <div className="mt-12">
                  <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-4">Core Competencies</p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 rounded-[2px] border border-ink/10 text-sm font-semibold text-ink/80 bg-ink/5 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Main Content Layer */}
      <div className="relative z-10 p-6 md:p-16 lg:p-32 xl:p-40 pt-16 md:pt-24 lg:pt-32">
        <div className="max-w-[1400px] mx-auto space-y-32 md:space-y-48 lg:space-y-64">
          
          {/* Top Row - Bio & Status */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12">
            <BentoCard className="md:col-span-2 justify-between bg-[var(--color-surface)]" delay={0.1}>
              <div className="relative h-48 md:h-64 -mx-8 md:-mx-10 -mt-8 md:-mt-10 mb-8 overflow-hidden shrink-0 group/cover border-b border-ink/10">
                <img 
                  src="/Cover%20Image.jpg" 
                  alt="Cover" 
                  className="w-full h-full object-cover filter grayscale opacity-60 group-hover/cover:grayscale-0 group-hover/cover:opacity-100 transition-all duration-1000 group-hover/cover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] to-transparent opacity-90" />
                <div className="absolute inset-0 bg-accent/10 opacity-50 mix-blend-overlay pointer-events-none group-hover/cover:opacity-0 transition-opacity duration-1000" />
              </div>
              
              <div className="mb-8">
                <span className="inline-block px-3 py-1 border border-accent/30 rounded-sm text-sm font-semibold tracking-widest uppercase mb-8 text-accent bg-accent/5 backdrop-blur-md shadow-[0_0_10px_rgba(0,229,255,0.1)]">
                  Portfolio 2026
                </span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-ink uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] neon-glow-hover">
                  Ar. Koushik <br />
                  <span className="text-accent drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] block mt-1">Narayanan. A</span>
                </h1>
                <h2 className="text-xl text-ink/70 font-semibold mb-6">
                  Urban Designer, Architect & Computational Urbanist
                </h2>
                <div className="w-12 h-[1px] bg-ink/20 mb-6" />
                <p className="text-sm text-ink/60 max-w-xl leading-relaxed">
                  Transforming urban fabrics through climate-responsive design, spatial analytics, and resilient master planning. 
                  <br/><span className="text-sm font-semibold uppercase tracking-widest mt-4 block text-ink/40">Council of Architecture Registered (CA/2022/150553)</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-auto">
                <a href="mailto:koushiknarayanan5852@gmail.com" target="_blank" rel="noopener noreferrer" onClick={handleContactClick} className="relative text-sm overflow-hidden group flex items-center gap-2 px-8 py-3.5 bg-ink text-surface rounded-sm font-semibold transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer">
                  <span className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  {isCopied ? (
                    <Check size={16} className="relative z-10 text-accent group-hover:text-black transition-colors" />
                  ) : (
                    <Mail size={16} className="relative z-10 group-hover:text-black transition-colors" />
                  )}
                  <span className="relative z-10 group-hover:text-black transition-colors">
                    {isCopied ? "Email Copied!" : "Contact"}
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/koushikpeter5852" target="_blank" rel="noopener noreferrer" onClick={handleLinkedinClick} className="flex text-sm items-center gap-2 px-8 py-3.5 rounded-sm font-semibold transition-all border border-ink/20 bg-surface/50 backdrop-blur-md hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] active:scale-95 text-ink cursor-pointer">
                  {isLinkedinCopied ? <Check size={16} className="text-accent" /> : <Linkedin size={16} />}
                  {isLinkedinCopied ? <span className="text-accent">Link Copied!</span> : "LinkedIn"}
                </a>
              </div>
            </BentoCard>

            <BentoCard className="flex flex-col group !p-0 overflow-hidden bg-[var(--color-surface)]" delay={0.2}>
              <div className="h-64 lg:h-72 w-full relative overflow-hidden bg-ink/5 shrink-0">
                <img 
                  src="/Profile.png" 
                  alt="Ar. Koushik Narayanan"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-1000 z-20 pointer-events-none mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-surface)] to-transparent z-30" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-accent" />
                  <h3 className="text-xl font-bold text-ink hover-none">Welcome</h3>
                </div>
                <p className="text-sm text-ink/70 leading-relaxed text-justify relative z-10">
                  I am passionate Architect and Urban designer; holding bachelor’s degree in architecture (B. Arch, 2021) and master’s degree in urban design (M. UD, 2024) from the School of Planning and Architecture, Vijayawada (SPAV), an Institute of National Importance. With over two and a half years of combined architectural and urban planning experience, I have developed strong technical, analytical, and design-based competencies aligned with the Development of the urban realm.
                </p>
              </div>
            </BentoCard>
          </div>

          {/* Middle Row - Projects Carousel */}
          <div className="relative z-20">
            <div className="flex items-end gap-4 pt-8 px-2 border-b border-ink/10 pb-6 mb-12 relative z-20">
               <Briefcase className="text-accent mb-1" size={32} strokeWidth={1.5} />
               <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">Selected Works</h2>
               
               <div className="ml-auto flex items-center gap-6">
                 <span className="text-ink/40 text-sm font-semibold hidden md:block uppercase tracking-widest">{PROJECTS.length.toString().padStart(2, '0')} Projects</span>
                 
                 {/* Slider Controls */}
                 <div className="flex items-center gap-2">
                   <button 
                     onClick={handlePrev}
                     className="w-9 h-9 rounded-[2px] border border-ink/20 flex items-center justify-center text-ink/60 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] bg-surface/50 backdrop-blur-sm transition-all cursor-pointer active:scale-95"
                     aria-label="Previous Project"
                   >
                     <ChevronLeft size={18} />
                   </button>
                   <button 
                     onClick={handleNext}
                     className="w-9 h-9 rounded-[2px] border border-ink/20 flex items-center justify-center text-ink/60 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] bg-surface/50 backdrop-blur-sm transition-all cursor-pointer active:scale-95"
                     aria-label="Next Project"
                   >
                     <ChevronRight size={18} />
                   </button>
                 </div>
               </div>
            </div>
            
            <div 
              className="min-h-[500px] w-full relative z-10 py-12 -my-12 overflow-visible"
              ref={carouselRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                ref={trackRef}
                drag="x"
                dragConstraints={{ left: -width, right: 0 }}
                dragElastic={0.15}
                onDragStart={() => setIsManualControl(true)}
                onDragEnd={handleDragEnd}
                animate={{ x: position }}
                transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
                className="flex gap-6 md:gap-8 cursor-grab active:cursor-grabbing w-max h-full"
              >
                {PROJECTS.map((project, idx) => (
                  <motion.div
                    layoutId={`project-card-${project.title}`}
                    key={project.title}
                    style={{ width: itemWidth, opacity: activeProject?.title === project.title ? 0 : 0.6 }}
                    onClick={() => setActiveProject(project)}
                    className={`editorial-card rounded-[4px] flex flex-col group flex-none transition-all duration-500 !p-0 max-w-[100vw] overflow-hidden relative cursor-pointer`}
                  >
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="p-8 flex flex-col h-full relative z-10 w-full transition-all pointer-events-none select-none">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-[2px] border border-ink/20 flex items-center justify-center group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] bg-surface text-ink transition-all duration-500 shrink-0">
                          {project.icon}
                        </div>
                        <div className="text-sm font-semibold text-ink/40 group-hover:text-accent transition-colors duration-500 mt-1 drop-shadow-md">
                          {String(idx + 1).padStart(2, '0')} / {PROJECTS.length}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 leading-tight transition-colors line-clamp-2 text-ink group-hover:text-ink">{project.title}</h3>
                      
                      <div className="w-full overflow-hidden mb-3 mask-edges">
                        <div className="flex w-max marquee-on-hover">
                          <p className="text-sm font-semibold text-accent uppercase tracking-wider pr-8">{project.role}</p>
                          <p className="text-sm font-semibold text-accent uppercase tracking-wider pr-8" aria-hidden="true">{project.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-5">
                        <Users size={14} className="text-ink/40 group-hover:text-ink/60 transition-colors" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-ink/40 group-hover:text-ink/60 transition-colors">{project.stakeholder}</span>
                      </div>
                      
                      <p className="text-sm text-ink/60 mb-6 flex-1 leading-relaxed transition-colors duration-500">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 text-sm font-semibold mt-auto relative">
                        <div className="absolute -top-3 left-0 w-0 h-[1px] bg-accent/50 group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded-[2px] border border-ink/10 text-ink/60 group-hover:border-accent/30 group-hover:bg-accent/5 group-hover:text-accent transition-colors duration-500 whitespace-nowrap">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Timeline Row */}
          <div>
            <BentoCard delay={0.6} className="bg-[var(--color-surface)]">
              <div className="flex items-center gap-4 mb-16 border-b border-ink/10 pb-6 relative z-10 w-full">
                <Compass className="text-accent" size={32} strokeWidth={1.5} />
                <h2 className="text-4xl font-bold tracking-tight">Timeline</h2>
              </div>
              <div className="relative border-l-2 border-ink/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative group/timeline cursor-default">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-surface border-2 border-accent flex items-center justify-center group-hover/timeline:shadow-[0_0_15px_rgba(0,229,255,0.6)] transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover/timeline:scale-100 transition-transform duration-300" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12">
                      <div className="md:w-1/3 shrink-0">
                         <div className="text-accent font-semibold tracking-wider uppercase text-sm mb-2">{exp.period}</div>
                         <h3 className="text-2xl font-bold text-ink group-hover/timeline:text-accent transition-colors duration-300">{exp.org}</h3>
                      </div>
                      <div className="md:w-2/3">
                         <h4 className={`text-lg font-bold text-ink/80 ${exp.desc ? 'mb-3' : ''}`}>{exp.role}</h4>
                         {exp.desc && (
                           <p className="text-ink/60 leading-relaxed group-hover/timeline:text-ink/80 transition-colors duration-300">{exp.desc}</p>
                         )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>

          {/* Bottom Row - Skills & Education */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12">
            <BentoCard className="xl:col-span-2 group overflow-hidden" delay={0.8}>
              <div className="absolute -bottom-20 -right-16 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-1000 pointer-events-none group-hover:rotate-12 group-hover:scale-125">
                <Layout size={400} strokeWidth={0.5} />
              </div>
              <div className="flex items-center gap-4 mb-16 border-b border-ink/10 pb-6 relative z-10">
                <Layout className="text-accent" size={32} strokeWidth={1.5} />
                <h2 className="text-4xl font-bold tracking-tight">Technical Toolkit</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                {SKILL_CATEGORIES.map((category, idx) => (
                  <div key={idx} className="space-y-5">
                    <h3 className="text-xl font-bold text-accent tracking-tight pl-3 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent" />
                      {category.title}
                    </h3>
                    <div className="flex flex-col gap-3 relative">
                      {category.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="group/skill flex items-center gap-3 cursor-default">
                           <div className="w-8 h-[1px] bg-ink/10 group-hover/skill:w-12 group-hover/skill:bg-accent transition-all duration-300" />
                           <span className="text-sm text-ink/70 font-semibold group-hover/skill:text-ink transition-colors group-hover/skill:translate-x-2 transform duration-300">
                             {skill}
                           </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>

            <BentoCard delay={0.9} className="group overflow-hidden">
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-1000 pointer-events-none group-hover:rotate-45 group-hover:scale-125">
                <GraduationCap size={400} strokeWidth={0.5} />
              </div>
              <div className="flex items-center gap-4 mb-16 border-b border-ink/10 pb-6 relative z-10">
                <h2 className="text-4xl font-bold tracking-tight">Education</h2>
              </div>
              
              <div className="space-y-12 relative z-10">
                <div className="group/edu cursor-default relative pl-6">
                   <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-ink/10 group-hover/edu:bg-accent transition-colors duration-500" />
                   <h3 className="text-xl font-bold text-ink hover-none">M.Arch in Urban Design</h3>
                   <p className="text-sm text-ink/60 mt-1 leading-relaxed">School of Planning and Architecture, Vijayawada (2022-2024)</p>
                   <p className="text-sm font-semibold text-accent mt-3 uppercase tracking-wider inline-block px-2 py-1 bg-accent/5 rounded-sm">GATE Scholarship</p>
                </div>
                
                <div className="group/edu cursor-default relative pl-6">
                   <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-ink/10 group-hover/edu:bg-ink transition-colors duration-500" />
                   <h3 className="text-xl font-bold text-ink hover-none">B.Arch</h3>
                   <p className="text-sm text-ink/60 mt-1 leading-relaxed">Adhiyamaan College of Engineering, Hosur (2016-2021)<br/>Anna University</p>
                   <p className="text-sm font-semibold text-ink/50 mt-3 pt-3 border-t border-ink/10">Thesis: Black Box Post-apocalyptic Incubator</p>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Bottom Row 2 - Workshops */}
          <BentoCard delay={1.0} className="w-full mt-8 xl:mt-12 group overflow-hidden">
            <div className="absolute -bottom-20 -right-10 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-1000 pointer-events-none group-hover:-rotate-12 group-hover:scale-125">
              <Layers size={450} strokeWidth={0.5} />
            </div>
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16 border-b border-ink/10 pb-6 relative z-10">
              <h2 className="text-4xl font-bold tracking-tight">Workshops & Programs</h2>
              <span className="text-ink/40 text-sm font-semibold uppercase tracking-widest hidden md:inline ml-auto">Conducted & Attended</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 relative z-10">
              {WORKSHOPS.map((workshop, idx) => (
                <div key={idx} className="group/w flex flex-col gap-2 relative cursor-default">
                  <div className="text-sm font-semibold text-ink/30 border-b border-ink/10 pb-1 mb-2 group-hover/w:border-accent group-hover/w:text-accent transition-colors duration-300">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="transform scale-90 opacity-60 origin-left group-hover/w:scale-100 group-hover/w:opacity-100 group-hover/w:translate-x-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <h3 className="text-xl font-bold leading-snug mb-1">{workshop.title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed">{workshop.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Contact Let's Talk Row */}
          <div>
            <BentoCard delay={1.1} className="bg-[var(--color-surface)]">
              <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start w-full">
                <div className="md:w-1/3 shrink-0">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-ink">Let's Talk</h2>
                  <p className="text-ink/60 leading-relaxed max-w-sm">
                    Get in touch and let me know how can I contribute!
                  </p>
                </div>
                
                <form onSubmit={handleFormSubmit} className="md:w-2/3 w-full space-y-6 flex flex-col relative z-20">
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
                  />
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
                  />
                  <textarea 
                    name="message"
                    required
                    placeholder="Message" 
                    rows={5}
                    className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-y min-h-[150px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
                  />
                  <button 
                    type="submit" 
                    className="self-end flex items-center justify-center gap-3 bg-[#1e88e5] text-white px-8 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(30,136,229,0.4)] hover:scale-105 active:scale-95 transition-all w-full md:w-auto mt-4"
                  >
                    <Send size={18} />
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </BentoCard>
          </div>

          {/* Footer */}
          <footer className="pt-24 pb-12 flex flex-col md:flex-row gap-8 justify-between items-center text-sm font-semibold text-ink/50 uppercase tracking-widest border-t border-ink/10 mt-24">
            <p>© {new Date().getFullYear()} Koushik Narayanan. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/koushik_narayanan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors group">
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
              <div className="w-[1px] h-4 bg-ink/20" />
              <a href="https://wa.me/918248478396" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors group">
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
