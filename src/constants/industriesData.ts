import { IndustryItem } from '../types';

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'banking',
    number: '01',
    title: 'Banking & Financial Services',
    icon: 'Building2',
    description:
      'Support applications that require uninterrupted 99.99% availability, strict PCI-DSS security compliance, high-volume transactional accuracy, and audit-ready data tracking.',
    badge: 'Mission-Critical',
    useCases: [
      'Core banking transaction portals & loan processing engines',
      'Payment gateway reconciliations & fraud check workflows',
      'Regulatory compliance reporting & encrypted audit trails',
      'Zero-downtime maintenance during peak trading windows',
    ],
  },
  {
    id: 'healthcare',
    number: '02',
    title: 'Healthcare & Pharmaceuticals',
    icon: 'Cross',
    description:
      'Reliable application support for healthcare workflows, hospital information systems (HIS), lab diagnostic integrations, and secure patient electronic records.',
    badge: 'HIPAA Compliant',
    useCases: [
      'Electronic Health Record (EHR/EMR) stability & backup management',
      'Pharmacy supply chain & serial tracking applications',
      'Telemedicine streaming portals & appointment scheduling',
      'High-security patient data encryption & access controls',
    ],
  },
  {
    id: 'manufacturing',
    number: '03',
    title: 'Manufacturing & Industrial',
    icon: 'Factory',
    description:
      'Maintain operational applications supporting real-time shop floor execution, production telemetry, inventory tracking, quality control, and ERP systems.',
    badge: 'Shop Floor Reliability',
    useCases: [
      'Manufacturing Execution Systems (MES) continuous uptime',
      'Warehouse management & automated barcode/RFID tracking',
      'Supply chain vendor portals & automated purchase orders',
      'Predictive maintenance alerts & SCADA system connectivity',
    ],
  },
  {
    id: 'retail',
    number: '04',
    title: 'Retail & E-Commerce',
    icon: 'ShoppingCart',
    description:
      'Maintain high-traffic customer-facing web storefronts, checkout pipelines, omnichannel inventory sync, and peak holiday sales surge preparedness.',
    badge: 'High-Volume Traffic',
    useCases: [
      'E-commerce store performance optimization & cart checkout speed',
      'Omnichannel inventory synchronization between stores & online',
      'Black Friday & festive flash sale load test preparation',
      'Third-party courier logistics & payment gateway webhook monitoring',
    ],
  },
  {
    id: 'education',
    number: '05',
    title: 'Education & EdTech',
    icon: 'GraduationCap',
    description:
      'Maintain institutional learning platforms, university administrative databases, examination portals, and student information systems.',
    badge: 'High Concurrency',
    useCases: [
      'Learning Management System (LMS) availability & video delivery',
      'Online proctored examination scalability during test peaks',
      'Student admission, grading, and transcript database maintenance',
      'Library resource indexing & campus portal integration',
    ],
  },
  {
    id: 'logistics',
    number: '06',
    title: 'Logistics & Transportation',
    icon: 'Truck',
    description:
      'Support applications for live fleet tracking, dispatch optimization, warehouse route planning, freight manifest reporting, and supply chain tracking.',
    badge: 'Real-Time Telemetry',
    useCases: [
      'GPS fleet tracking & route optimization algorithms',
      'Freight billing, customs documentation, and consignment tracking',
      'Driver mobile application backend synchronization',
      'Warehouse cross-docking and inventory turnaround systems',
    ],
  },
  {
    id: 'construction',
    number: '07',
    title: 'Construction & Real Estate',
    icon: 'Hammer',
    description:
      'Support project management platforms, architectural document management, site inspection workflows, and property management systems.',
    badge: 'Field Operations',
    useCases: [
      'Project milestone tracking, cost estimation & subcontractor billing',
      'Blueprints, CAD file storage, and version control repositories',
      'Field inspection mobile checklists & safety audit logging',
      'Tenant leasing portals & automated maintenance request routing',
    ],
  },
  {
    id: 'government',
    number: '08',
    title: 'Government & Public Sector',
    icon: 'Landmark',
    description:
      'Support citizen-facing civic portals, department workflow systems, secure licensing applications, and digital public records.',
    badge: 'Public Accountability',
    useCases: [
      'Citizen public services & document verification portals',
      'Inter-departmental data exchange & workflow automation',
      'High-security government database maintenance & threat auditing',
      'Public grievance redressal tracking & SLA compliance',
    ],
  },
];
