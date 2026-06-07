export type GoalPath = 'Appeal-focused' | 'PSL-focused'

export function generate90DayProgram(goal: GoalPath) {
  const blocks = [
    { name: 'Foundation', actions: ['Set goals', 'Upload baseline photos', 'Choose style direction', 'Enable consent preferences'] },
    { name: 'Presentation', actions: ['Posture practice', 'Grooming routine', 'Color palette review', 'Photo angle testing'] },
    { name: 'Portfolio', actions: ['Polas plan', 'Outfit planning', 'Photographer brief', 'Portfolio tracker update'] },
    { name: 'Casting Readiness', actions: ['Casting simulation', 'Runway walk drill', 'Intro pitch practice', 'Agency shortlist'] },
    { name: 'Optimization', actions: ['Monthly report', 'Before/after scoring', 'Milestone review', 'Evidence-backed next actions'] }
  ]

  return Array.from({ length: 90 }).map((_, i) => {
    const block = blocks[Math.min(4, Math.floor(i / 18))]
    const focus =
      goal === 'PSL-focused'
        ? 'Improve camera presentation, grooming, symmetry-friendly angles, and polished basics safely.'
        : 'Improve charisma, styling, warmth, confidence, social presence, and fashion appeal safely.'

    return {
      day: i + 1,
      phase: block.name,
      actions: [block.actions[i % block.actions.length], focus]
    }
  })
}

export function journeyLevel(score: number) {
  if (score >= 90) return 'Elite Ready'
  if (score >= 75) return 'Casting Ready'
  if (score >= 55) return 'Portfolio Builder'
  if (score >= 35) return 'Foundation'
  return 'Starter'
}

export function exportUserData() {
  return {
    creator: 'Djibril Julien Bourouno',
    brand: 'NextFace AI OS',
    profileMemory: {},
    conversations: [],
    projects: [],
    uploads: [],
    researchLogs: [],
    sourceCards: [],
    goals: [],
    milestones: [],
    reports: [],
    consent: {
      analytics: false,
      profileMemory: false,
      personalization: false,
      uploadTraining: false,
      researchHistory: false
    },
    exportedAt: new Date().toISOString()
  }
}

export function requestDeletion() {
  return {
    status: 'queued',
    message: 'Production deletion should remove user profile, uploads, conversations, analytics events, research logs, goals, reports, and backups under the privacy policy.'
  }
}
