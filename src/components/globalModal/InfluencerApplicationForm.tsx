import React, { useState } from 'react';
import GlobalInputOrig from '../inputs/GlobalInput';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { X } from 'lucide-react';

const LANGUAGES = [
  'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Mandarin', 'Japanese', 'Korean', 'Arabic', 'Urdu', 'Hindi', 'Other'
];

const InfluencerApplicationForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [instagram, setInstagram] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [youtube, setYoutube] = useState('');
  const [industry, setIndustry] = useState('');
  const [followerCount, setFollowerCount] = useState('');
  const [city, setCity] = useState('');
  const [stateVal, setStateVal] = useState('');
  const [country, setCountry] = useState('');
  const [languages, setLanguages] = useState<Record<string, boolean>>({});
  const [sampleLink, setSampleLink] = useState('');
  const [bio, setBio] = useState('');

  const toggleLanguage = (lang: string) => {
    setLanguages(prev => ({ ...prev, [lang]: !prev[lang] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      fullName,
      email,
      phone,
      instagram,
      tiktok,
      youtube,
      industry,
      followerCount,
      location: { city, state: stateVal, country },
      languages: Object.keys(languages).filter(k => languages[k]),
      sampleLink,
      bio,
    };
    // eslint-disable-next-line no-console
    console.log('Influencer application submit:', payload);
  };

  return (
    <div>
      <p className='text-center font-light max-[900px]:text-sm text-md'>
        For creators looking to get booked for paid collaborations through Zoiax Media.
      </p>
      <p className='text-center text-[18px] max-[900px]:text-[16px] mt-4'>
        Join the future of influence-powered business. Be seen. Be booked. Be paid.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GlobalInputOrig title="Full Name *" placeholder="Full Name" value={fullName} onChange={(e: any) => setFullName(e.target.value)} />
          <GlobalInputOrig title="Email *" placeholder="Enter email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
        </div>

        <GlobalInputOrig title="Phone *" placeholder="Enter Phone" value={phone} onChange={(e: any) => setPhone(e.target.value)} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GlobalInputOrig title="Instagram Handle *" placeholder="@username" value={instagram} onChange={(e: any) => setInstagram(e.target.value)} />
          <GlobalInputOrig title="TikTok Handle (optional)" placeholder="@username" value={tiktok} onChange={(e: any) => setTiktok(e.target.value)} />
        </div>

        <GlobalInputOrig title="YouTube or Other Platforms (optional)" placeholder="YouTube channel, website, etc" value={youtube} onChange={(e: any) => setYoutube(e.target.value)} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="pl-1 pb-1 text-sm">Primary Industry</p>
            <Select onValueChange={(val: string) => setIndustry(val)}>
              <SelectTrigger className="w-full border bg-[#F6F6F6] border-transparent focus:border-[#012641] !h-[42px]">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="food">Food & Dining</SelectItem>
                  <SelectItem value="fashion">Fashion & Beauty</SelectItem>
                  <SelectItem value="fitness">Fitness</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="pl-1 pb-1 text-sm">Follower Count</p>
            <Select onValueChange={(val: string) => setFollowerCount(val)}>
              <SelectTrigger className="w-full border bg-[#F6F6F6] border-transparent focus:border-[#012641] !h-[42px]">
                <SelectValue placeholder="Select Count" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1k-10k">1k - 10k</SelectItem>
                  <SelectItem value="10k-100k">10k - 100k</SelectItem>
                  <SelectItem value=">100k">&gt;100k</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <GlobalInputOrig title="City" placeholder="City" value={city} onChange={(e: any) => setCity(e.target.value)} />
          <GlobalInputOrig title="State" placeholder="State" value={stateVal} onChange={(e: any) => setStateVal(e.target.value)} />
          <GlobalInputOrig title="Country" placeholder="Country" value={country} onChange={(e: any) => setCountry(e.target.value)} />
        </div>

        <div>
          <p className="font-medium mb-2">Languages Spoken</p>
          <div className="flex flex-wrap gap-4">
            {LANGUAGES.map(lang => {
              const active = !!languages[lang];
              return (
                <button
                  type="button"
                  key={lang}
                  onClick={() => toggleLanguage(lang)}
                  className={`px-3 py-1.5 rounded-full cursor-pointer flex items-center gap-2 text-sm border ${active ? 'bg-black text-white' : 'bg-[#F6F6F6] text-black'}`}>
                  {lang} {active && <X size={18} />}
                </button>
              );
            })}
          </div>
        </div>

        <GlobalInputOrig title="Sample Work or Portfolio Links" placeholder="Link to your best content" value={sampleLink} onChange={(e: any) => setSampleLink(e.target.value)} />

        <div>
          <p className="pl-1 pb-1 text-sm">Bio / Why Should We Approve You?</p>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself, your content style, and what makes you unique.."
            className="w-full min-h-[100px] p-3 rounded placeholder:font-light bg-[#F6F6F6] focus:bg-white text-sm border border-transparent focus:border-[#676767] outline-0" />
        </div>

        <div className="pt-4">
          <button type="submit" className="w-full bg-black text-white py-3 rounded">Apply to Join</button>
        </div>
      </form>
    </div>
  );
};

export default InfluencerApplicationForm;
