'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  DollarSign,
  Clock,
  Headphones,
  FileCheck,
  Users,
} from 'lucide-react'

const advantages = [
  {
    icon: Shield,
    title: 'Полная защита',
    description:
      'Деньги замораживаются до подтверждения выполнения всех условий сделки обеими сторонами.',
    color: 'text-neon-green',
    bg: 'bg-neon-green/10',
  },
  {
    icon: DollarSign,
    title: 'Комиссия 1%',
    description:
      'Самая низкая комиссия на рынке. Никаких скрытых платежей — вы платите только за результат.',
    color: 'text-accent-light',
    bg: 'bg-accent/10',
  },
  {
    icon: Clock,
    title: 'Быстрые сделки',
    description:
      'Среднее время проведения сделки — 24 часа. Мгновенные выплаты на любой кошелёк или карту.',
    color: 'text-neon-blue',
    bg: 'bg-neon-blue/10',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    description:
      'Команда поддержки доступна круглосуточно. Среднее время ответа — 5 минут.',
    color: 'text-neon-pink',
    bg: 'bg-neon-pink/10',
  },
  {
    icon: FileCheck,
    title: 'Юридическая чистота',
    description:
      'Все сделки сопровождаются юридическими документами. Полный пакет для бухгалтерии.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    icon: Users,
    title: 'Репутационная система',
    description:
      'Прозрачный рейтинг участников. Проверяйте историю сделок перед началом работы.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
]

export function Advantages() {
  return (
    <section id="advantages" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-accent-light">Почему мы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Преимущества <span className="gradient-text">SecureDeal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Мы создали идеальную платформу для безопасных сделок любого масштаба
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl p-8 card-hover glow-border"
            >
              <div
                className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-light transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}