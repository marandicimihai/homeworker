import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Upload } from 'lucide-react'

function UploadTextbook() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile.name)
      // Add your upload logic here
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Upload a Textbook</CardTitle>
          <CardDescription>
            Select a textbook file to upload
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="file-upload" className="text-sm font-medium">
              Choose File
            </Label>
            <div className="flex flex-col items-center justify-center w-full">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 border-slate-300 hover:border-slate-400 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-slate-400" />
                  <p className="mb-2 text-sm text-slate-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-slate-400">
                    PDF, EPUB, or other document formats
                  </p>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.epub,.doc,.docx"
                />
              </label>
            </div>
            {selectedFile && (
              <p className="text-sm text-slate-600 mt-2">
                Selected: <span className="font-medium">{selectedFile.name}</span>
              </p>
            )}
          </div>
          <Button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="w-full"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Textbook
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default UploadTextbook
