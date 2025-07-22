// components/MoreToolsSection.tsx
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { tools } from "@/lib/data" // You may need to move your tools array to a shared file like lib/data.ts

export default function MoreToolsSection() {
  return (
    <div className="mt-12 space-y-4">
      <h2 className="text-2xl font-bold">Explore More Tools</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.slice(0, 6).map((tool, index) => (
          <Link key={index} href={tool.href}>
            <Card className="group relative hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
              <CardContent className="p-4 flex items-center space-x-4">
                <div className={`rounded-lg p-2 ${tool.bgColor}`}>
                  <tool.icon className={`w-5 h-5 ${tool.iconColor}`} />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{tool.name}</p>
                  <p className="text-xs text-muted-foreground">{tool.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
