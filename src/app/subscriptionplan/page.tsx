'use client'

import React, { useState } from 'react'
import PlanCard from '@/components/cards/PlanCard'
import GlobalModal from '@/components/globalModal/GlobalModal'
import PaymentModal from '@/components/globalModal/PaymentModal'

const plans = [
  {
    plan_id: 1,
    price: 29,
    name: 'Basic Plan',
    seats_limit: 3,
    monthly_fee: '$10',
    per_user_joining_fee: '$5',
    per_user_monthly_fee: '$2',
    description: 'Great for individuals or small teams just getting started.'
  },
  {
    plan_id: 2,
    price: 59,
    name: 'Pro Plan',
    seats_limit: 10,
    monthly_fee: '$25',
    per_user_joining_fee: '$10',
    per_user_monthly_fee: '$4',
    description: 'Ideal for growing teams that need more power.'
  },
  {
    plan_id: 3,
    price: 99,
    name: 'Enterprise Plan',
    seats_limit: 30,
    monthly_fee: '$50',
    per_user_joining_fee: '$20',
    per_user_monthly_fee: '$6',
    description: 'Best for large organizations with complex needs.'
  },
  {
    plan_id: 4,
    price: 149,
    name: 'Ultimate Plan',
    seats_limit: 50,
    monthly_fee: '$70',
    per_user_joining_fee: '$25',
    per_user_monthly_fee: '$8',
    description: 'Complete solution for enterprise-grade operations.'
  }
]

const Subscriptionplan = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null)
  const [modalOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="py-4 px-[5%] max-[768px]:px-4">
        <p className="font-bold text-3xl">Unlock Passive Income</p>
        <p>Choose a plan that suits you and start earning passive income.</p>
        <div className="grid md:grid-cols-3 gap-6 mx-auto mt-10">
          {plans.map((plan) => (
            <PlanCard
              key={plan.plan_id}
              plan={plan}
              isSelected={selectedPlanId === plan.plan_id}
              onClick={() => setSelectedPlanId(plan.plan_id)}
              onSubscribe={() => setIsOpen(true)}
            />
          ))}
        </div>
      </div>

      <GlobalModal
        isOpen={modalOpen}
        onClose={() => setIsOpen(false)}
        title="Commitment & Onboarding Fees"
        className='w-[500px] max-[550px]:w-[90vw]'
      >
        <PaymentModal cancelClick={() => setIsOpen(false)} />
      </GlobalModal>
    </>
  )
}

export default Subscriptionplan