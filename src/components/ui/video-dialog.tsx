"use client"

import * as React from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

interface VideoDialogProps {
  videoUrl: string
  thumbnailUrl?: string
  title?: string
}

export function VideoDialog({
  videoUrl,
  thumbnailUrl,
  title = "Watch Demo",
}: VideoDialogProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="lg"
        className="group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-background/50 dark:bg-background/30 backdrop-blur-sm border-border/50 hover:bg-background/70 dark:hover:bg-background/50 hover:scale-105 transition-all duration-300"
        onClick={() => setOpen(true)}
      >
        <Play className="mr-2 w-4 h-4" />
        {title}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 bg-black">
          <div className="aspect-video">
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 