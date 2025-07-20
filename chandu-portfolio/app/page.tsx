"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  Trophy,
  Target,
  Send,
  Star,
  Zap,
  Rocket,
  Heart,
  Eye,
  GitBranch,
  BarChart3,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Brain,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Boya_Chandrakanth_Resume.pdf"
    link.click()
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", contactForm)
    setContactForm({ name: "", email: "", phone: "", message: "" })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  const projects = [
    {
      title: "Movie Recommendation System",
      date: "April 2024",
      description:
        "Implemented a sophisticated machine learning-based movie recommendation system using Python, leveraging advanced algorithms for personalized user experiences.",
      detailedDescription: [
        "Utilized matrix factorization methods combined with K-means clustering for enhanced personalized recommendations",
        "Implemented comprehensive data preprocessing and feature engineering using Pandas and NumPy libraries",
        "Achieved high accuracy in recommendation predictions through optimized machine learning algorithms",
        "Designed scalable architecture capable of handling large datasets efficiently",
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "K-means", "Matrix Factorization"],
      gradient: "from-purple-500 to-pink-500",
      icon: Sparkles,
      githubUrl: "https://github.com/CHANDU-4706/movie-recommendation-system",
      features: ["Personalized Recommendations", "Matrix Factorization", "K-means Clustering", "Data Preprocessing"],
      impact: "Enhanced user engagement through personalized movie suggestions",
    },
    {
      title: "Cyberbullying Detection System",
      date: "April 2024",
      description:
        "Developed an advanced cyberbullying detection system addressing rising online safety concerns using cutting-edge natural language processing techniques.",
      detailedDescription: [
        "Applied Linear Discriminant Analysis (LDA) and Quadratic Discriminant Analysis (QDA) algorithms for text classification",
        "Overcame limitations of existing detection methods by implementing novel NLP approaches",
        "Achieved superior accuracy in identifying cyberbullying patterns and behaviors",
        "Demonstrated commitment to online safety and digital well-being through innovative technology solutions",
      ],
      tech: ["Python", "NLP", "LDA", "QDA", "Machine Learning", "Text Classification"],
      gradient: "from-blue-500 to-cyan-500",
      icon: Shield,
      githubUrl: "https://github.com/CHANDU-4706/cyberbullying-detection",
      features: ["NLP Processing", "LDA Algorithm", "QDA Algorithm", "Text Classification"],
      impact: "Contributed to safer online environments through automated detection",
    },
    {
      title: "Smart Budget Tracker",
      date: "March 2023",
      description:
        "Created a comprehensive responsive budget tracking application with intuitive user interface and dynamic expense management capabilities.",
      detailedDescription: [
        "Developed responsive user interface using Bootstrap framework for seamless cross-device accessibility",
        "Implemented sophisticated input forms for expense categorization with dates and amounts",
        "Utilized JSON for efficient data storage, retrieval, and manipulation ensuring real-time updates",
        "Created dynamic visualization of total expenses, remaining budgets, and spending patterns",
        "Enabled comprehensive CRUD operations for individual expense records with enhanced usability",
      ],
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "JSON", "Responsive Design"],
      gradient: "from-green-500 to-emerald-500",
      icon: TrendingUp,
      githubUrl: "https://github.com/CHANDU-4706/budget-tracker",
      features: ["Responsive Design", "Expense Categorization", "Real-time Updates", "CRUD Operations"],
      impact: "Simplified personal finance management for users",
    },
    {
      title: "Interactive Data Analytics Dashboards",
      date: "May 2024",
      description:
        "Built comprehensive interactive dashboards for business intelligence, providing actionable insights through advanced data visualization techniques.",
      detailedDescription: [
        "Developed interactive Excel dashboard for chocolate company analyzing production efficiency and sales performance",
        "Implemented advanced charts, pivot tables, and predictive models for accurate sales forecasting",
        "Created dynamic filtering capabilities for enhanced data exploration and business intelligence",
        "Designed interactive Tableau dashboard analyzing app performance metrics including ratings, reviews, and installation data",
        "Provided data-driven insights enabling strategic business decision-making",
      ],
      tech: ["Excel", "Tableau", "Data Visualization", "Pivot Tables", "Predictive Analytics"],
      gradient: "from-orange-500 to-red-500",
      icon: BarChart3,
      githubUrl: "https://github.com/CHANDU-4706/data-analytics-dashboards",
      features: ["Interactive Charts", "Predictive Models", "Dynamic Filtering", "Business Intelligence"],
      impact: "Enabled data-driven decision making for business stakeholders",
    },
  ]

  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "September 2024",
      score: "55/75",
      id: "NPTEL24CS118S1570200756",
      description: "12-week comprehensive course covering cloud computing fundamentals and advanced concepts.",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      title: "Data Structures and Algorithms - Self Paced (C++)",
      issuer: "GeeksforGeeks",
      date: "August 2024",
      hours: "230 hours",
      description: "Comprehensive course covering all major data structures and algorithms with hands-on practice.",
      gradient: "from-green-600 to-teal-600",
    },
    {
      title: "Generative AI for Everyone",
      issuer: "Coursera (DeepLearning.AI)",
      date: "March 2023",
      instructor: "Andrew Ng",
      description: "Introduction to generative AI concepts and applications in various domains.",
      gradient: "from-indigo-600 to-blue-600",
    },
    {
      title: "Data Science with Python Internship",
      issuer: "Coincent.ai",
      date: "July - August 2023",
      description: "Hands-on internship focusing on data science applications and Python development.",
      gradient: "from-purple-600 to-pink-600",
    },
  ]

  const skills = {
    "Programming Languages": ["C++", "Python"],
    "Frameworks & Libraries": ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    "Tools & Platforms": [
      "MySQL",
      "Google Colab",
      "VSCode",
      "GitHub",
      "Excel",
      "Tableau",
      "AWS",
      "Docker",
      "Jenkins",
      "Terraform",
    ],
    "Soft Skills": ["Communication", "Creative Thinking", "Time Management", "Adaptability"],
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/boya-chandrakanth/",
      icon: Linkedin,
      color: "text-blue-600 hover:text-blue-700",
      bg: "bg-blue-50 hover:bg-blue-100",
    },
    {
      name: "GitHub",
      url: "https://github.com/CHANDU-4706",
      icon: Github,
      color: "text-gray-800 hover:text-gray-900",
      bg: "bg-gray-50 hover:bg-gray-100",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/boya_chandu_/",
      icon: Code,
      color: "text-orange-600 hover:text-orange-700",
      bg: "bg-orange-50 hover:bg-orange-100",
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/boyachanu1yr/",
      icon: Target,
      color: "text-green-600 hover:text-green-700",
      bg: "bg-green-50 hover:bg-green-100",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-gradient-to-r from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image src="/images/profile.jpg" alt="Boya Chandrakanth" fill className="object-cover" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Boya Chandrakanth
                </h1>
                <p className="text-gray-600 text-lg">Computer Science Engineering Student</p>
                <div className="flex items-center mt-2 space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${social.bg} ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8 bg-white/50 backdrop-blur-sm border border-purple-100">
            {[
              { value: "about", label: "About" },
              { value: "experience", label: "Experience" },
              { value: "projects", label: "Projects" },
              { value: "certifications", label: "Certifications" },
              { value: "skills", label: "Skills" },
              { value: "coding", label: "Coding" },
              { value: "connect", label: "Connect" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white transition-all duration-300"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white border-0 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Rocket className="w-8 h-8 animate-pulse" />
                  <h2 className="text-2xl font-bold">About Me</h2>
                </div>
                <p className="text-lg leading-relaxed opacity-95">
                  Proven ability to seamlessly adapt to emerging technologies, unravel complex problems with a touch of
                  creativity. Eagerly seeking opportunities to infuse innovation into a dynamic work environment,
                  bringing a unique blend of adaptability and creative problem-solving to drive success in the
                  ever-evolving landscape of technology.
                </p>
                <div className="flex items-center mt-6 space-x-6">
                  <div className="flex items-center space-x-2 transform hover:scale-105 transition-all duration-300">
                    <Zap className="w-5 h-5" />
                    <span>Innovative Thinker</span>
                  </div>
                  <div className="flex items-center space-x-2 transform hover:scale-105 transition-all duration-300">
                    <Star className="w-5 h-5" />
                    <span>Problem Solver</span>
                  </div>
                  <div className="flex items-center space-x-2 transform hover:scale-105 transition-all duration-300">
                    <Heart className="w-5 h-5" />
                    <span>Tech Enthusiast</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">Bachelor of Technology - CSE</h3>
                    <p className="text-sm text-green-600 font-medium">Lovely Professional University</p>
                    <p className="text-sm text-gray-500">2022 - Present | CGPA: 7.52</p>
                    <Progress value={75.2} className="mt-2 h-2" />
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">Intermediate</h3>
                    <p className="text-sm text-green-600 font-medium">Narayana Junior College</p>
                    <p className="text-sm text-gray-500">2020 - 2022 | 74%</p>
                    <Progress value={74} className="mt-2 h-2" />
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">Matriculation</h3>
                    <p className="text-sm text-green-600 font-medium">Ridge School of Excellence</p>
                    <p className="text-sm text-gray-500">2019 - 2020 | 75%</p>
                    <Progress value={75} className="mt-2 h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-blue-700">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <a href="mailto:boyachandu4706@gmail.com" className="text-blue-600 hover:underline font-medium">
                      boyachandu4706@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">+91-8341660116</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">Kurnool, Andhra Pradesh 518004</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${social.bg} ${social.color}`}
                      >
                        <social.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Trophy className="w-5 h-5 mr-2" />
                  Achievements & Leadership
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <h3 className="font-semibold text-gray-800 mb-2">Daily Problem-Solving Practice</h3>
                    <p className="text-sm text-gray-600">
                      Consistently solving daily problems on GeeksforGeeks and LeetCode to enhance problem-solving
                      skills.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <h3 className="font-semibold text-gray-800 mb-2">Leadership & Event Management</h3>
                    <p className="text-sm text-gray-600">
                      Actively volunteered in college events, participated in hackathons, and coordinated sessions.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <h3 className="font-semibold text-gray-800 mb-2">Environmental Leadership</h3>
                    <p className="text-sm text-gray-600">
                      Led awareness rally on sustainable environment, engaging with local communities on eco-friendly
                      practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Internship Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6 bg-white p-6 rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">Data Science with Python Intern</h3>
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">May 2024</Badge>
                    </div>
                    <p className="text-purple-600 font-medium mb-3">Coincent (Remote)</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>
                          Acquired practical skills with NumPy, Pandas, Matplotlib, and Scikit-learn for data analysis
                          and visualization
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Worked on real-world data science applications and developed a chatbot using Python</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Enhanced skills in machine learning and natural language processing (NLP)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Collaborated on projects involving data preprocessing and model development</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "NLP"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-purple-300 text-purple-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enhanced Projects Tab */}
          <TabsContent value="projects">
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden transform hover:scale-[1.02]"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                          <project.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-gray-800 mb-1">{project.title}</CardTitle>
                          <Badge className={`bg-gradient-to-r ${project.gradient} text-white flex items-center`}>
                            <Calendar className="w-3 h-3 mr-1" />
                            {project.date}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white`}
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="hover:bg-gray-50 bg-transparent">
                          <Eye className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <GitBranch className="w-4 h-4 mr-2" />
                        Key Features & Implementation
                      </h4>
                      <ul className="space-y-2">
                        {project.detailedDescription.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Core Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <Badge
                              key={featureIndex}
                              variant="secondary"
                              className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Impact
                        </h4>
                        <p className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className={`bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {hoveredProject === index && (
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200 animate-in slide-in-from-bottom-2 duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm font-medium">Featured Project</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4 text-green-500" />
                              <span className="text-sm">Collaborative</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Brain className="w-4 h-4 text-purple-500" />
                              <span className="text-sm">ML/AI Powered</span>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700">
                            Learn More
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications">
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden transform hover:scale-[1.02]"
                >
                  <div className={`h-3 bg-gradient-to-r ${cert.gradient}`}></div>
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-800">
                      <Award className="w-6 h-6 mr-3 text-yellow-500" />
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Issued by <span className="font-semibold text-gray-700">{cert.issuer}</span> • {cert.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{cert.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {cert.score && (
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm">
                            <strong>Score:</strong> {cert.score}
                          </span>
                        </div>
                      )}
                      {cert.hours && (
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-green-500" />
                          <span className="text-sm">
                            <strong>Duration:</strong> {cert.hours}
                          </span>
                        </div>
                      )}
                      {cert.instructor && (
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">
                            <strong>Instructor:</strong> {cert.instructor}
                          </span>
                        </div>
                      )}
                      {cert.id && (
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-purple-500" />
                          <span className="text-sm">
                            <strong>Certificate ID:</strong> {cert.id}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, skillList], index) => {
                const gradients = [
                  "from-blue-500 to-purple-500",
                  "from-green-500 to-teal-500",
                  "from-orange-500 to-red-500",
                  "from-pink-500 to-rose-500",
                ]
                return (
                  <Card
                    key={category}
                    className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden transform hover:scale-[1.02]"
                  >
                    <div className={`h-2 bg-gradient-to-r ${gradients[index % gradients.length]}`}></div>
                    <CardHeader>
                      <CardTitle className="text-gray-800">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        {skillList.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            className={`bg-gradient-to-r ${gradients[index % gradients.length]} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* Coding Tab */}
          <TabsContent value="coding">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-700">
                    <Code className="w-5 h-5 mr-2" />
                    LeetCode Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-lg">
                      <Target className="w-12 h-12 mx-auto mb-2" />
                      <h3 className="text-2xl font-bold">Daily Solver</h3>
                      <p className="opacity-90">Consistently solving problems daily</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-green-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="text-2xl font-bold text-green-600">Easy</div>
                        <div className="text-sm text-gray-600">Problems</div>
                      </div>
                      <div className="p-4 bg-yellow-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="text-2xl font-bold text-yellow-600">Medium</div>
                        <div className="text-sm text-gray-600">Problems</div>
                      </div>
                      <div className="p-4 bg-red-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="text-2xl font-bold text-red-600">Hard</div>
                        <div className="text-sm text-gray-600">Problems</div>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transform hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a href="https://leetcode.com/u/boya_chandu_/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View LeetCode Profile
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <Target className="w-5 h-5 mr-2" />
                    GeeksforGeeks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg">
                      <Award className="w-12 h-12 mx-auto mb-2" />
                      <h3 className="text-xl font-bold">DSA Certified</h3>
                      <p className="opacity-90">230-hour course completed</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <span className="text-sm text-gray-600">Course Duration</span>
                        <span className="text-sm font-medium text-green-600">230 Hours</span>
                      </div>
                      <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <span className="text-sm text-gray-600">Focus Area</span>
                        <span className="text-sm font-medium text-green-600">Data Structures & Algorithms</span>
                      </div>
                      <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <span className="text-sm text-gray-600">Language</span>
                        <span className="text-sm font-medium text-green-600">C++</span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white transform hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a
                        href="https://www.geeksforgeeks.org/user/boyachanu1yr/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View GeeksforGeeks Profile
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]">
              <CardHeader>
                <CardTitle className="text-gray-800">Other Coding Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button
                    className="justify-start bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="https://github.com/CHANDU-4706" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub Profile
                    </a>
                  </Button>
                  <Button
                    className="justify-start bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="https://www.hackerrank.com/boyachandu4706" target="_blank" rel="noopener noreferrer">
                      <Code className="w-4 h-4 mr-2" />
                      HackerRank Profile
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Connect Tab */}
          <TabsContent value="connect">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <Heart className="w-5 h-5 mr-2" />
                    Let's Connect
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Ready to collaborate on exciting projects? Feel free to reach out for opportunities, discussions, or
                    just to connect with a fellow developer!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="font-semibold text-gray-800 mb-2">Get in Touch</h3>
                      <p className="text-sm text-gray-600">
                        I'm always excited to discuss new opportunities, innovative projects, or potential
                        collaborations. Whether you have a project in mind or just want to say hello, don't hesitate to
                        reach out!
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${social.bg} ${social.color}`}
                        >
                          <social.icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <Send className="w-5 h-5 mr-2 text-blue-500" />
                    Send Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                        className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                        className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700">
                        Phone (Optional)
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-700">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or just say hello!"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        required
                        className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500 min-h-[100px] transition-all duration-300"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Boya Chandrakanth</h3>
            <p className="opacity-90 mb-4">Computer Science Engineering Student | Problem Solver | Tech Enthusiast</p>
            <div className="flex justify-center space-x-6 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm opacity-75">&copy; 2024 Boya Chandrakanth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
