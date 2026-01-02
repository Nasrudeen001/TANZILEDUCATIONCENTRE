"use client"

import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ApplicationPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Join <span className="text-teal-400">TANZIL EDUCATION CENTRE</span>
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Take the first step towards quality Islamic education. Apply and become part of our learning community.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {/* Application Requirements */}
            <Card className="bg-slate-700 border-slate-600 mt-8">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">Application Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-teal-400 mb-4">General Requirements:</h4>
                    <ul className="text-left text-slate-300 space-y-2">
                      <li>• Completed application form</li>
                      <li>• Birth certificate copy</li>
                      <li>• Previous academic records</li>
                      <li>• Passport-size photographs (2-4 copies)</li>
                      <li>• Parent/Guardian identification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-teal-400 mb-4">Boarding Requirements:</h4>
                    <ul className="text-left text-slate-300 space-y-2">
                      <h2 className="text-lg font-semibold text-teal-400 mb-4">Integrated</h2>
                      <li>• Boys: Shirt (white), Trousers (beige), Socks (brown with dark brown strips)</li>
                      <li>• Girls: Blouse (white), Dress (beige), Trouser (white), Hijab (white with beige ribbon), Socks (White)</li>
                      <li>• Sweater (beige with a logo)</li>
                      <h2 className="text-lg font-semibold text-teal-400 mb-4">Taalim</h2>
                      <li>• Boys: Kanzu (grey), White cap (Kofia)</li>
                      <li>• Girls: Dress (grey), Trousers (white), Hijab (white with grey ribbon)</li>
                      <h2 className="text-lg font-semibold text-teal-400 mb-4">Tahfidh</h2>
                      <li>• Pujabi (grey), Trousers (grey), White cap (Kofia)</li>
                    </ul>
                  </div>
                </div>
                <div className="text-sm text-slate-400 mt-6 text-center">
                  <p>For assistance with the application process, please contact our admissions office.</p>
                  <p className="mt-2">Phone: +254 726 376 569 | +254 769 199 301</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 