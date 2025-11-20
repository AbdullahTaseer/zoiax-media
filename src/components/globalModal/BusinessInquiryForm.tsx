'use client';
import React, { useState } from 'react';
import GlobalInput from '../inputs/GlobalInput';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type MarketingNeed = {
  key: string;
  label: string;
};

const MARKETING_NEEDS: MarketingNeed[] = [
  { key: 'social', label: 'Social Media Setup & Management' },
  { key: 'content', label: 'Content Creation (Photo/Video)' },
  { key: 'influencer', label: 'Influencer Marketing Campaign' },
  { key: 'website', label: 'Website Development or Improvements' },
  { key: 'google', label: 'Google & Yelp Optimization' },
  { key: 'strategy', label: 'Strategy Consultation' },
  { key: 'other', label: 'Other' },
];

const BusinessInquiryForm: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [website, setWebsite] = useState('');
  const [city, setCity] = useState('');
  const [stateVal, setStateVal] = useState('');
  const [country, setCountry] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [marketingNeeds, setMarketingNeeds] = useState<Record<string, boolean>>({});
  const [budget, setBudget] = useState('');
  const [preferredInfluencerType, setPreferredInfluencerType] = useState('');
  const [notes, setNotes] = useState('');

  const toggleNeed = (key: string) => {
    setMarketingNeeds(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      businessName,
      industry,
      website,
      city,
      state: stateVal,
      country,
      fullName,
      email,
      phone,
      marketingNeeds: Object.keys(marketingNeeds).filter(k => marketingNeeds[k]),
      budget,
      preferredInfluencerType,
      notes,
    };
    console.log('Business inquiry submit:', payload);
  };

  return (
    <div>
      <p className='text-center font-light max-[900px]:text-sm text-md'>
        For brands, restaurants, services, and professionals looking to grow with Zoiax Media.
      </p>
      <p className='text-center text-[18px] max-[900px]:text-[16px] mt-4'>
        Ready to grow your business? Let our experts help you stand out with <br /> content, influencers, and marketing support.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GlobalInput
            title="Business Name"
            placeholder="Enter your business name"
            value={businessName}
            onChange={(e: any) => setBusinessName(e.target.value)}
          />
          <div>
            <p className="pl-1 pb-2 text-sm">Primary Industry</p>
            <Select onValueChange={(val: string) => setIndustry(val)}>
              <SelectTrigger className="w-full border data-[placeholder]:font-[300] bg-[#F6F6F6] border-transparent focus:border-[#012641] !h-[42px]">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="restaurant">Restaurant / Food</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="media">Media / Creator</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <GlobalInput
          title="Website or Social Links (optional)"
          placeholder="website, YouTube channel, etc"
          value={website}
          onChange={(e: any) => setWebsite(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <GlobalInput title="City" placeholder="City" value={city} onChange={(e: any) => setCity(e.target.value)} />
          <GlobalInput title="State" placeholder="State" value={stateVal} onChange={(e: any) => setStateVal(e.target.value)} />
          <GlobalInput title="Country" placeholder="Country" value={country} onChange={(e: any) => setCountry(e.target.value)} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GlobalInput
            title="Full Name"
            placeholder="Enter name"
            value={fullName}
            onChange={(e: any) => setFullName(e.target.value)}
          />
          <GlobalInput
            title="Email"
            placeholder="Enter email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full mt-4">
          <GlobalInput
            title="Phone"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <p className="font-medium mb-2">Marketing Needs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {MARKETING_NEEDS.map(item => (
              <label key={item.key} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={!!marketingNeeds[item.key]}
                  onChange={() => toggleNeed(item.key)}
                  className="w-4 h-4 accent-black rounded border-gray-300"
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="pl-1 pb-1 text-sm">Marketing Budget</p>
            <Select onValueChange={(val: string) => setBudget(val)}>
              <SelectTrigger className="w-full border bg-[#F6F6F6] border-transparent focus:border-[#012641] !h-[42px]">
                <SelectValue placeholder="Select Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="<$1k">&lt;$1,000</SelectItem>
                  <SelectItem value="$1k-5k">$1,000 - $5,000</SelectItem>
                  <SelectItem value=">$5k">&gt;$5,000</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="pl-1 pb-1 text-sm">Preferred Influencer Type</p>
            <Select onValueChange={(val: string) => setPreferredInfluencerType(val)}>
              <SelectTrigger className="w-full border bg-[#F6F6F6] border-transparent focus:border-[#012641] !h-[42px]">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="micro">Micro (1k-10k)</SelectItem>
                  <SelectItem value="mid">Mid (10k-100k)</SelectItem>
                  <SelectItem value="macro">Macro (&gt;100k)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <p className="pl-1 pb-1 text-sm">Goals or Notes</p>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Tell us about your goals or anything we should know to better help you."
            className="w-full min-h-[100px] p-3 rounded placeholder:font-light bg-[#F6F6F6] focus:bg-white text-sm border border-transparent focus:border-[#676767] outline-0"
          />
        </div>

        <div className="pt-2">
          <button type="submit" className="w-full cursor-pointer bg-black text-white py-3 rounded">
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessInquiryForm;
