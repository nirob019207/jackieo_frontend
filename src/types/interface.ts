import type { LucideIcon } from "lucide-react"

export interface CourseStep {
  id: number
  title: string
  description: string
  icon: LucideIcon
  bgColor: string
  hasShadow?: boolean
}

export interface CourseData {
  header: {
    title: string
    subtitle: string
  }
  steps: CourseStep[]
}

export interface BannerProps  {
  image: string;
  title: string;
  text: string;
  buttonText?: string;
  buttonLink?: string;
};

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  nationality: string;
  contact_number: string;
  email: string;
  address: string;
  nid_number: string;
  program: string;
  bachelor_institution: string;
  degree_earned: string;
  graduation_year: number;
  gpa: number;
  job_title: string;
  years_experience: number;
  responsibilities: string;
  passport_path: string;
  nid_path: string;
  application_status: string;
  created_at: string;
  updated_at: string;
}