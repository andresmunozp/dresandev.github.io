interface Project {
  images: string[]
  description: string
  repositoryURL: string
  liveURL: string
}

const getProjectImages = (projectName: string): string[] => {
  const baseURL = 'assets/images/projects/'
  return [
    `${baseURL + projectName}-desktop.webp`,
    `${baseURL + projectName}-mobile.webp`
  ]
}

const projects: Project[] = [
  {
    images: getProjectImages('project'),
    description: 'The cozy cabin nestled in the woods offered a peaceful retreat from the bustling city life.',
    repositoryURL: '#',
    liveURL: '#'
  },
  {
    images: getProjectImages('project'),
    description: 'The cozy cabin nestled in the woods offered a peaceful retreat from the bustling city life.',
    repositoryURL: '#',
    liveURL: '#'
  },
  {
    images: getProjectImages('project'),
    description: 'The cozy cabin nestled in the woods offered a peaceful retreat from the bustling city life.',
    repositoryURL: '#',
    liveURL: '#'
  }
]

export default projects
