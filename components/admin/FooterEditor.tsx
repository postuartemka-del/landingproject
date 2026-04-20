"use client"

import { useState } from "react"
import { Plus, Trash2 } from "lucide-react"

type FooterData = {
  text: string
  companyName: string
  email: string
  phone: string
  description: string
  socialLinks: {
    name: string
    url: string
  }[]
}

export function FooterEditor() {
  const [form, setForm] = useState<FooterData>({
    text: "",
    companyName: "",
    email: "",
    phone: "",
    description: "",
    socialLinks: [],
  })

  const addSocialLink = () => {
    setForm({
      ...form,
      socialLinks: [...form.socialLinks, { name: "", url: "" }],
    })
  }

  const removeSocialLink = (index: number) => {
    setForm({
      ...form,
      socialLinks: form.socialLinks.filter((_, i) => i !== index),
    })
  }

  const updateSocialLink = (
    index: number,
    field: "name" | "url",
    value: string
  ) => {
    const updated = [...form.socialLinks]
    updated[index][field] = value

    setForm({
      ...form,
      socialLinks: updated,
    })
  }

  return (
    <div className="space-y-6">
      {/* Company */}
      <input
        type="text"
        placeholder="Название компании"
        value={form.companyName}
        onChange={(e) =>
          setForm({ ...form, companyName: e.target.value })
        }
        className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3"
      />

      {/* Email */}
      <input
        type="text"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3"
      />

      {/* Phone */}
      <input
        type="text"
        placeholder="Телефон"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
        className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3"
      />

      {/* Description */}
      <textarea
        placeholder="Описание"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        rows={3}
        className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3"
      />

      {/* Footer text */}
      <input
        type="text"
        placeholder="Текст футера"
        value={form.text}
        onChange={(e) =>
          setForm({ ...form, text: e.target.value })
        }
        className="w-full bg-dark-700 border border-white/[0.1] rounded-xl px-4 py-3"
      />

      {/* Social Links */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3>Соцсети</h3>
          <button
            onClick={addSocialLink}
            className="flex items-center gap-2 text-sm"
          >
            <Plus size={16} /> Добавить
          </button>
        </div>

        <div className="space-y-3">
          {form.socialLinks.map((link, i) => (
            <div key={i} className="flex gap-2">
              <input
                type="text"
                placeholder="Название"
                value={link.name}
                onChange={(e) =>
                  updateSocialLink(i, "name", e.target.value)
                }
                className="flex-1 bg-dark-700 border border-white/[0.1] rounded-xl px-3 py-2"
              />

              <input
                type="text"
                placeholder="URL"
                value={link.url}
                onChange={(e) =>
                  updateSocialLink(i, "url", e.target.value)
                }
                className="flex-1 bg-dark-700 border border-white/[0.1] rounded-xl px-3 py-2"
              />

              <button onClick={() => removeSocialLink(i)}>
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}