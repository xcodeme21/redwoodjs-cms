import type { Prisma, Category } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CategoryCreateArgs>({
  category: {
    one: { data: { category: 'String3864790' } },
    two: { data: { category: 'String8406867' } },
  },
})

export type StandardScenario = ScenarioData<Category, 'category'>
