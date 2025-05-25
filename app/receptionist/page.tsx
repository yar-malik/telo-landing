"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"

const data = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    date: "2023-10-26",
    time: "10:00 AM",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    date: "2023-10-26",
    time: "11:00 AM",
  },
  {
    name: "Peter Jones",
    email: "peter.jones@example.com",
    phone: "555-123-4567",
    date: "2023-10-27",
    time: "02:00 PM",
  },
]

export default function ReceptionistPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Receptionist Dashboard</CardTitle>
          <CardDescription>Manage appointments and visitors.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <Label htmlFor="search">Search Visitors:</Label>
              <Input
                type="search"
                id="search"
                placeholder="Enter visitor name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Table>
              <TableCaption>List of scheduled visitors.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.time}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="destructive" size="sm" className="ml-2">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex justify-end">
              <Button>Add New Visitor</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-blue-100 text-primary">
                <CardHeader>
                  <CardTitle>Total Visitors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.length}</div>
                </CardContent>
              </Card>

              <Card className="bg-blue-100 text-blue-600">
                <CardHeader>
                  <CardTitle>Today's Visitors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.filter((item) => item.date === "2023-10-26").length}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
