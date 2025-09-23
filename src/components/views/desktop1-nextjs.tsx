import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import './desktop1.css'

type SearchResult = {
  id: number;
  platform: string;
  username: string;
  content: string;
  link: string;
};

const Desktop1 = (props: any) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAPI, setSelectedAPI] = useState('wizardhat')
  const [selectedRegion, setSelectedRegion] = useState('us')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showRegionDropdown, setShowRegionDropdown] = useState(false)

  // API options for selection
  const apiOptions = [
    { id: 'facebook', name: 'Facebook' },
    { id: 'twitter', name: 'Twitter' },
    { id: 'instagram', name: 'Instagram' },
    { id: 'reddit', name: 'Reddit' },
    { id: 'tiktok', name: 'TikTok' },
    { id: 'youtube', name: 'YouTube' },
    { id: 'wizardhat', name: 'Wizard Hat' }
  ]

  // Region options for selection
  const regionOptions = [
    { id: 'global', name: 'Global' },
    { id: 'us', name: 'United States' },
    { id: 'eu', name: 'Europe' },
    { id: 'asia', name: 'Asia' }
  ]

  // API fetch functions
  const fetchFacebook = async (query: any, region: any) => {
    // Mock API call - replace with actual Facebook API
    return [
      { id: 1, platform: 'Facebook', username: 'CryptoNews', content: `Facebook post about ${query}`, link: '#' },
      { id: 2, platform: 'Facebook', username: 'BlockchainDaily', content: `Latest ${query} updates`, link: '#' }
    ]
  }

  const fetchTwitter = async (query: any, region: any) => {
    // Mock API call - replace with actual Twitter API
    return [
      { id: 1, platform: 'Twitter', username: '@cryptoexpert', content: `Tweet about ${query}`, link: '#' },
      { id: 2, platform: 'Twitter', username: '@blockchain_news', content: `Breaking: ${query} analysis`, link: '#' }
    ]
  }

  const fetchInstagram = async (query: any, region: any) => {
    // Mock API call - replace with actual Instagram API
    return [
      { id: 1, platform: 'Instagram', username: 'crypto_lifestyle', content: `Instagram post about ${query}`, link: '#' },
      { id: 2, platform: 'Instagram', username: 'nft_collector', content: `Visual story on ${query}`, link: '#' }
    ]
  }

  const fetchReddit = async (query: any, region: any) => {
    // Mock API call - replace with actual Reddit API
    return [
      { id: 1, platform: 'Reddit', username: 'r/cryptocurrency', content: `Reddit discussion: ${query}`, link: '#' },
      { id: 2, platform: 'Reddit', username: 'r/bitcoin', content: `Community thoughts on ${query}`, link: '#' }
    ]
  }

  const fetchTikTok = async (query: any, region: any) => {
    // Mock API call - replace with actual TikTok API
    return [
      { id: 1, platform: 'TikTok', username: '@cryptotok', content: `TikTok video about ${query}`, link: '#' },
      { id: 2, platform: 'TikTok', username: '@blockchain_dance', content: `Viral ${query} content`, link: '#' }
    ]
  }

  const fetchYouTube = async (query: any, region: any) => {
    // Mock API call - replace with actual YouTube API
    return [
      { id: 1, platform: 'YouTube', username: 'CryptoChannel', content: `YouTube video: ${query} explained`, link: '#' },
      { id: 2, platform: 'YouTube', username: 'BlockchainTV', content: `Deep dive into ${query}`, link: '#' }
    ]
  }

  const fetchRandom = async (query: any, region: any) => {
    const apis = [fetchFacebook, fetchTwitter, fetchInstagram, fetchReddit, fetchTikTok, fetchYouTube]
    const randomAPI = apis[Math.floor(Math.random() * apis.length)]
    return await randomAPI(query, region)
  }

  const fetchNarratives = async (query: any, source: any, region: any) => {
    setIsLoading(true)
    try {
      let results = []
      switch (source) {
        case 'facebook':
          results = await fetchFacebook(query, region)
          break
        case 'twitter':
          results = await fetchTwitter(query, region)
          break
        case 'instagram':
          results = await fetchInstagram(query, region)
          break
        case 'reddit':
          results = await fetchReddit(query, region)
          break
        case 'tiktok':
          results = await fetchTikTok(query, region)
          break
        case 'youtube':
          results = await fetchYouTube(query, region)
          break
        case 'wizardhat':
          results = await fetchRandom(query, region)
          break
        default:
          results = await fetchRandom(query, region)
      }
      setSearchResults(results)
    } catch (error) {
      console.error('Error fetching narratives:', error)
      setSearchResults([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      fetchNarratives(searchQuery, selectedAPI, selectedRegion)
    }
  }

  const handleAPISelect = (apiId: any) => {
    setSelectedAPI(apiId)
    if (searchQuery.trim()) {
      fetchNarratives(searchQuery, apiId, selectedRegion)
    }
  }

  const handleRegionSelect = (regionId: any) => {
    setSelectedRegion(regionId)
    setShowRegionDropdown(false)
  }

  const getSelectedAPI = () => apiOptions.find(api => api.id === selectedAPI) || apiOptions[6]
  const getSelectedRegion = () => regionOptions.find(region => region.id === selectedRegion) || regionOptions[1]
  return (
    <div className="desktop1-container">
      <Head>
        <title>Crypto Wizard - The Ultimate Crypto Marketplace</title>
      </Head>
      <div className="desktop1-desktop1">
        <img
          src="/rectangle1112-v6s.svg"
          alt="Rectangle1112"
          className="desktop1-rectangle1"
        />
        
        {/* Search Results */}
        {searchResults.length > 0 && (
          <div style={{padding: '20px', margin: '20px 0'}}>
            <h3 style={{color: '#333', marginBottom: '20px'}}>Results for "{searchQuery}" from {selectedAPI}</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1200px'}}>
              {searchResults.map((result, index) => (
                <div key={`${result.id}-${index}`} style={{
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '16px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  <div style={{fontWeight: 'bold', color: '#666', fontSize: '12px', marginBottom: '8px'}}>
                    {result.platform.toUpperCase()}
                  </div>
                  <div style={{fontWeight: 'bold', marginBottom: '8px'}}>{result.username}</div>
                  <div style={{color: '#555', lineHeight: '1.4', marginBottom: '12px'}}>{result.content}</div>
                  <a href={result.link} style={{color: '#007bff', textDecoration: 'none', fontSize: '12px'}}>
                    View Original Post
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {searchResults.length === 0 && searchQuery && !isLoading && (
          <div style={{textAlign: 'center', padding: '40px', color: '#666', fontStyle: 'italic'}}>
            No narratives found for "{searchQuery}". Try another keyword.
          </div>
        )}
        
        <div className="desktop1-frame3columnfeed">
          <div className="desktop1-framecolumn11">
            <div className="desktop1-frame71">
              <img
                src="/image138945-wh1g-200h.png"
                alt="image138945"
                className="desktop1-image131"
              />
              <img
                src="/image148957-iotm-200h.png"
                alt="image148957"
                className="desktop1-image141"
              />
            </div>
          </div>
          <div className="desktop1-framecolumn2">
            <img
              src="/image148943-jmpe-500w.png"
              alt="image148943"
              className="desktop1-image142"
            />
          </div>
          <div className="desktop1-framecolumn3">
            <div className="desktop1-framecolumn12">
              <div className="desktop1-frame72">
                <img
                  src="/image138954-vaed-300h.png"
                  alt="image138954"
                  className="desktop1-image132"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="desktop1-frame3searchsection">
          <div className="desktop1-frame4socialmediabuttons">
            <button className="desktop1-frame5buttonframe1" onClick={() => handleAPISelect('facebook')}>
              <div className="desktop1-group51">
                <img
                  src="/ellipse12162-t87m-200h.png"
                  alt="Ellipse12162"
                  className="desktop1-ellipse11"
                />
                <img
                  src="/vector2161-khtg.svg"
                  alt="Vector2161"
                  className="desktop1-vector10"
                />
                <img
                  src="/vector2161-938.svg"
                  alt="Vector2161"
                  className="desktop1-vector11"
                />
              </div>
            </button>
            <div className="desktop1-frame5youtube" onClick={() => handleAPISelect('youtube')} style={{cursor: 'pointer'}}>
              <div className="desktop1-group52">
                <img
                  src="/ellipse12216-diy8-200h.png"
                  alt="Ellipse12216"
                  className="desktop1-ellipse12"
                />
                <img
                  src="/ellipse22218-zy3d-200h.png"
                  alt="Ellipse22218"
                  className="desktop1-ellipse2"
                />
                <img
                  src="/frame2217-egx.svg"
                  alt="Frame2217"
                  className="desktop1-frame"
                />
              </div>
            </div>
            <img
              src="/frame5buttonframe4845-ofnv.svg"
              alt="Frame5buttonframe4845"
              className="desktop1-frame5buttonframe2"
              onClick={() => handleAPISelect('twitter')}
              style={{cursor: 'pointer'}}
            />
            <button className="desktop1-frame5buttonframe3" onClick={() => handleAPISelect('reddit')}>
              <div className="desktop1-redditvector">
                <img
                  src="/ellipse12218-pvv-200h.png"
                  alt="Ellipse12218"
                  className="desktop1-ellipse13"
                />
                <img
                  src="/vector4877-s2bj.svg"
                  alt="Vector4877"
                  className="desktop1-vector12"
                />
                <img
                  src="/vector4878-wlnj.svg"
                  alt="Vector4878"
                  className="desktop1-vector13"
                />
              </div>
            </button>
            <div className="desktop1-frame5ig" onClick={() => handleAPISelect('instagram')} style={{cursor: 'pointer'}}>
              <div className="desktop1i-gvector">
                <img
                  src="/ellipse12219-rbye-200h.png"
                  alt="Ellipse12219"
                  className="desktop1-ellipse14"
                />
                <div className="desktop1-group6">
                  <img
                    src="/vector2231-q0v.svg"
                    alt="Vector2231"
                    className="desktop1-vector14"
                  />
                  <img
                    src="/vector2231-abyh.svg"
                    alt="Vector2231"
                    className="desktop1-vector15"
                  />
                  <img
                    src="/vector2231-zy5.svg"
                    alt="Vector2231"
                    className="desktop1-vector16"
                  />
                  <img
                    src="/vector2231-f8nh.svg"
                    alt="Vector2231"
                    className="desktop1-vector17"
                  />
                  <img
                    src="/vector2231-nkek.svg"
                    alt="Vector2231"
                    className="desktop1-vector18"
                  />
                </div>
              </div>
            </div>
            <button className="desktop1-frame5-tiktokbutton" onClick={() => handleAPISelect('tiktok')}>
              <div className="desktop1-vector19">
                <img
                  src="/ellipse12211-8l7a-200h.png"
                  alt="Ellipse12211"
                  className="desktop1-ellipse15"
                />
                <img
                  src="/tiktok2231-hqey.svg"
                  alt="TikTok2231"
                  className="desktop1-tik-tok"
                />
              </div>
            </button>
            <div className="desktop1-wizardhaticon21" onClick={() => handleAPISelect('wizardhat')} style={{cursor: 'pointer'}}>
              <img
                src="/ellipse12505-wwxh-200h.png"
                alt="Ellipse12505"
                className="desktop1-ellipse16"
              />
              <div className="desktop1-group71">
                <img
                  src="/vector2502-60fk.svg"
                  alt="Vector2502"
                  className="desktop1-vector20"
                />
                <img
                  src="/vector2502-l3ct.svg"
                  alt="Vector2502"
                  className="desktop1-vector21"
                />
                <img
                  src="/vector2503-9e7h.svg"
                  alt="Vector2503"
                  className="desktop1-vector22"
                />
                <img
                  src="/vector2503-id3o.svg"
                  alt="Vector2503"
                  className="desktop1-vector23"
                />
                <img
                  src="/vector2503-8y9.svg"
                  alt="Vector2503"
                  className="desktop1-vector24"
                />
                <img
                  src="/vector2503-bpe.svg"
                  alt="Vector2503"
                  className="desktop1-vector25"
                />
                <img
                  src="/vector2503-yexk.svg"
                  alt="Vector2503"
                  className="desktop1-vector26"
                />
                <img
                  src="/vector2503-1cj2.svg"
                  alt="Vector2503"
                  className="desktop1-vector27"
                />
                <img
                  src="/vector2503-9cgg.svg"
                  alt="Vector2503"
                  className="desktop1-vector28"
                />
                <img
                  src="/vector2503-bn9p.svg"
                  alt="Vector2503"
                  className="desktop1-vector29"
                />
                <img
                  src="/vector2503-wc4o.svg"
                  alt="Vector2503"
                  className="desktop1-vector30"
                />
                <img
                  src="/vector2503-goz.svg"
                  alt="Vector2503"
                  className="desktop1-vector31"
                />
              </div>
            </div>
          </div>
          <span className="desktop1-text10">Search by Platform</span>
          <div className="desktop1-frame6-search-row">
            <img
              src="/rectangle36112-31pb-200h.png"
              alt="Rectangle36112"
              className="desktop1-rectangle3"
            />
            <div className="desktop1-wizardhaticon22">
              <img
                src="/ellipse12505-8gfq-200h.png"
                alt="Ellipse12505"
                className="desktop1-ellipse17"
              />
              <div className="desktop1-group72">
                <img
                  src="/vector2505-3iy9.svg"
                  alt="Vector2505"
                  className="desktop1-vector32"
                />
                <img
                  src="/vector2505-z7w.svg"
                  alt="Vector2505"
                  className="desktop1-vector33"
                />
                <img
                  src="/vector2506-y0ev.svg"
                  alt="Vector2506"
                  className="desktop1-vector34"
                />
                <img
                  src="/vector2506-l5q9.svg"
                  alt="Vector2506"
                  className="desktop1-vector35"
                />
                <img
                  src="/vector2506-i1ig.svg"
                  alt="Vector2506"
                  className="desktop1-vector36"
                />
                <img
                  src="/vector2506-tkuf.svg"
                  alt="Vector2506"
                  className="desktop1-vector37"
                />
                <img
                  src="/vector2506-c1i.svg"
                  alt="Vector2506"
                  className="desktop1-vector38"
                />
                <img
                  src="/vector2506-nu8.svg"
                  alt="Vector2506"
                  className="desktop1-vector39"
                />
                <img
                  src="/vector2506-2cps.svg"
                  alt="Vector2506"
                  className="desktop1-vector40"
                />
                <img
                  src="/vector2506-0rl.svg"
                  alt="Vector2506"
                  className="desktop1-vector41"
                />
                <img
                  src="/vector2506-d5q8.svg"
                  alt="Vector2506"
                  className="desktop1-vector42"
                />
                <img
                  src="/vector2506-s9m4.svg"
                  alt="Vector2506"
                  className="desktop1-vector43"
                />
              </div>
            </div>
          </div>
          <span className="desktop1-text11">Search Narratives</span>
          <input
            type="text"
            placeholder="Search Narratives..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            style={{
              position: 'absolute',
              top: '315px',
              left: '9px',
              width: '596px',
              height: '47px',
              padding: '8px 12px',
              fontSize: '16px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid #ddd',
              borderRadius: '4px',
              outline: 'none',
              color: '#333',
              zIndex: 1
            }}
          />
          <img
            src="/arrowdropdown2517-1lr.svg"
            alt="arrowdropdown2517"
            className="desktop1-arrowdropdown"
          />
          <div className="desktop1-frame12">
            <div className="desktop1us-united-states" onClick={() => setSelectedRegion('us')} style={{cursor: 'pointer'}}>
              <div className="desktop1-flag">
                <div className="desktop1-contents">
                  <img
                    src="/middlei253-td4i.svg"
                    alt="middleI253"
                    className="desktop1-middle"
                  />
                  <img
                    src="/combinedshapei253-54m.svg"
                    alt="CombinedShapeI253"
                    className="desktop1-combined-shape1"
                  />
                  <img
                    src="/combinedshapei253-52h.svg"
                    alt="CombinedShapeI253"
                    className="desktop1-combined-shape2"
                  />
                  <img
                    src="/combinedshapei253-3p1.svg"
                    alt="CombinedShapeI253"
                    className="desktop1-combined-shape3"
                  />
                  <img
                    src="/combinedshapei253-tr6.svg"
                    alt="CombinedShapeI253"
                    className="desktop1-combined-shape4"
                  />
                  <img
                    src="/combinedshapei253-ea7w.svg"
                    alt="CombinedShapeI253"
                    className="desktop1-combined-shape5"
                  />
                  <img
                    src="/combinedshapei253-3ae.svg"
                    alt="CombinedShapeI253"
                    className="desktop1-combined-shape6"
                  />
                  <img
                    src="/combinedshapei253-z2c.svg"
                    alt="CombinedShapeI253"
                    className="desktop1-combined-shape7"
                  />
                  <img
                    src="/rectangle82i253-hsps-200h.png"
                    alt="Rectangle82I253"
                    className="desktop1-rectangle82"
                  />
                  <img
                    src="/combinedshapei253-s54.svg"
                    alt="CombinedShapeI253"
                    className="desktop1-combined-shape8"
                  />
                </div>
              </div>
            </div>
          </div>
          <span className="desktop1-text12">Set Region </span>
          <img
            src="/rectangle52771-v9x-200h.png"
            alt="Rectangle52771"
            className="desktop1-rectangle5"
          />
          <span className="desktop1-text13">Summarize </span>
          <img
            src="/rectangle62771-pxlr-200h.png"
            alt="Rectangle62771"
            className="desktop1-rectangle6"
          />
          <span className="desktop1-text14">Sentiment</span>
          <div className="desktop1-group8">
            <img
              src="/ellipse12792-vsoh-200h.png"
              alt="Ellipse12792"
              className="desktop1-ellipse18"
            />
            <img
              src="/chatgpt2792-4g9.svg"
              alt="ChatGPT2792"
              className="desktop1-chat-gpt"
            />
          </div>
          <div className="desktop1-grok1">
            <div className="desktop1-grok2">
              <img
                src="/union2792-tao.svg"
                alt="Union2792"
                className="desktop1-union"
              />
            </div>
          </div>
          <span className="desktop1-text15">AI Engine:</span>
        </div>
        <div className="desktop1-framefooter">
          <div className="desktop1-footernav">
            <Link href="/contact" className="desktop1-text16 desktop1-nav-button">Contact Us</Link>
            <Link href="/privacy" className="desktop1-text17 desktop1-nav-button">Privacy Terms</Link>
            <Link href="/about" className="desktop1-text18 desktop1-nav-button">About Us</Link>
            <Link href="/donate" className="desktop1-text19 desktop1-nav-button">Donate</Link>
          </div>
        </div>
        <div className="desktop1-frame73">
          <img
            src="/image131574-ia8u-200h.png"
            alt="image131574"
            className="desktop1-image133"
          />
          <img
            src="/image141574-bc4h-200h.png"
            alt="image141574"
            className="desktop1-image143"
          />
        </div>
        <div className="desktop1-frame8">
          <img
            src="/image131575-1tq8-200h.png"
            alt="image131575"
            className="desktop1-image134"
          />
          <img
            src="/image141575-yvbm-200h.png"
            alt="image141575"
            className="desktop1-image144"
          />
        </div>
        <div className="desktop1-frame9">
          <img
            src="/image131578-38za-200h.png"
            alt="image131578"
            className="desktop1-image135"
          />
          <img
            src="/image141578-nxrd-200h.png"
            alt="image141578"
            className="desktop1-image145"
          />
          <div className="desktop1-frame1"></div>
        </div>
        <img
          src="/rectangle23512-97i6-200h.png"
          alt="Rectangle23512"
          className="desktop1-rectangle2"
        />
        <div className="desktop1-rightheadernav">
          <Link href="/feedback" className="desktop1-text20 desktop1-nav-button">
            💬 Feedback
          </Link>
          <div className="desktop1-store-dropdown">
            <Link href="/store" className="desktop1-text23 desktop1-nav-button desktop1-store-button">🏠 Store</Link>
            <div className="desktop1-dropdown-menu">
              <Link href="/store/crypto-cards" className="desktop1-dropdown-item">Crypto Cards</Link>
              <Link href="/store/crypto-hardware" className="desktop1-dropdown-item">Crypto Hardware</Link>
              <Link href="/store/crypto-software" className="desktop1-dropdown-item">Crypto Software / Tools</Link>
              <Link href="/store/crypto-phones" className="desktop1-dropdown-item">Crypto Phones</Link>
            </div>
          </div>
          <Link href="/jobboard" className="desktop1-text24 desktop1-nav-button">💼 Job Board</Link>
          <Link href="/blog" className="desktop1-text25 desktop1-nav-button">📝 Blog</Link>
        </div>
        <div className="desktop1-headernav">
          <img
            src="/rectangle42124-micx-200h.png"
            alt="Rectangle42124"
            className="desktop1-rectangle4"
          />
          <div className="desktop1-directories-dropdown">
            <Link href="/directories" className="desktop1-text26 desktop1-nav-button desktop1-directories-button">📂 Directories</Link>
            <div className="desktop1-dropdown-menu">
              <Link href="/directories/discord" className="desktop1-dropdown-item">Discord Server Directory</Link>
              <Link href="/directories/telegram" className="desktop1-dropdown-item">Telegram Groups Directory</Link>
              <Link href="/directories/onion" className="desktop1-dropdown-item">Onion Sites Directory</Link>
              <Link href="/directories/crypto-websites" className="desktop1-dropdown-item">Crypto Websites Directory</Link>
              <Link href="/directories/influencer" className="desktop1-dropdown-item">Influencer Directory</Link>
            </div>
          </div>
          <Link href="/pullnarratives" className="desktop1-text27 desktop1-nav-button">🧲 Pull Narratives</Link>
          <Link href="/pushnarratives" className="desktop1-text28 desktop1-nav-button">📡 Push Narratives</Link>
          <div className="desktop1-tools-dropdown">
            <Link href="/tools" className="desktop1-text29 desktop1-nav-button desktop1-tools-button">🤖 Tools</Link>
            <div className="desktop1-dropdown-menu">
              <Link href="/tools/free-software" className="desktop1-dropdown-item">Free Software</Link>
              <Link href="/tools/free-ai" className="desktop1-dropdown-item">Free AI Tools</Link>
              <Link href="/tools/software" className="desktop1-dropdown-item">Software</Link>
              <Link href="/tools/ai-tools" className="desktop1-dropdown-item">AI Tools</Link>
            </div>
          </div>
        </div>
        <div className="desktop1-group2">
          <div className="desktop1-frame2">
            <div className="desktop1-group1">
              <img
                src="/image41553-3nfv-200h.png"
                alt="IMAGE41553"
                className="desktop1image4"
              />
              <img
                src="/image51556-sc28-200h.png"
                alt="IMAGE51556"
                className="desktop1image5"
              />
              <img
                src="/image61558-beiq-200h.png"
                alt="IMAGE61558"
                className="desktop1image6"
              />
              <img
                src="/image71551-sa4o-200h.png"
                alt="IMAGE71551"
                className="desktop1image7"
              />
              <span className="desktop1-text30">
                <span>💬 General</span>
                <br></br>
                <span>Profit from Narrative Control</span>
                <br></br>
                <span>
                  The Attention Economy — Crypto, Stocks, Sports Betting, and
                  more
                </span>
                <br></br>
                <span>→ Track Real-Time Narratives</span>
                <br></br>
                <span>
                  → Monitor Trends Across Platforms (X, Facebook, Reddit,
                  TikTok, Youtube, Instagram &amp; More)
                </span>
              </span>
              <span className="desktop1-text40">
                <span>🎯 For Recruiters</span>
                <br></br>
                <span>Earn Recruiter Royalties</span>
                <br></br>
                <span>Invite Buyers or Influencers → Get Paid Forever</span>
                <br></br>
                <span>→ 10% Per Deal, Forever</span>
                <br></br>
                <span>→ Build Passive Income</span>
                <br></br>
                <span>[Start Recruiting]</span>
              </span>
              <span className="desktop1-text52">
                <span>🧑‍🎤 For Influencers</span>
                <br></br>
                <span>Earn Crypto by Promoting Narratives</span>
                <br></br>
                <span>
                  Founding Influencer Spots Are Open
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>→ Keep 80–85% Commission</span>
                <br></br>
                <span>→ Get Free Exposure + Leads</span>
                <br></br>
                <span>[Apply Now]</span>
              </span>
              <span className="desktop1-text64">
                <span>💰 For Buyers</span>
                <br></br>
                <span>Lower Cost. Diversify Results. Spread Faster.</span>
                <br></br>
                <span>💡 Save Money with Micro-Influencers</span>
                <br></br>
                <span>
                  → Push many micro-creators across social media platforms.
                </span>
                <br></br>
                <span>→ Choose influencers by Platform, Niche, or Cost</span>
                <br></br>
                <span>→ Or set custom bounties: by views, goals, or vibe</span>
                <br></br>
                <span>[Find Influencers Now]</span>
              </span>
            </div>
          </div>
        </div>
        <div className="desktop1-frame1main">
          <div className="desktop1-header">
            <img
              src="/wizardhaticon1319-d9vj-200h.png"
              alt="wizardhaticon1319"
              className="desktop1-wizardhaticon1"
            />
            <span className="desktop1-text79">Crypto Wizard</span>
          </div>
          <div className="desktop1-dashboard-section">
            <div className="desktop1-dashboard">
              <span role="heading" aria-level={2} className="desktop1-text80" style={{
                fontSize: '20px',
                color: 'var(--nav-color-muted, #666)',
                fontWeight: 'normal',
                marginRight: '16px',
                marginLeft: '48px',
                alignSelf: 'center'
              }}>Dashboard&nbsp;&nbsp;&nbsp;|</span>
              <div className="desktop1-promoter-dropdown">
                <Link href="/promoterhover" className="desktop1-nav-button desktop1-promoter-button">
                  📣 Promoter
                </Link>
                <div className="desktop1-dropdown-menu">
                  <Link href="/promoter/stats" className="desktop1-dropdown-item">Stats</Link>
                  <Link href="/promoter/directory" className="desktop1-dropdown-item">Influencer Directory</Link>
                  <Link href="/promoter/terms" className="desktop1-dropdown-item">Rate/Terms</Link>
                  <Link href="/promoter/history" className="desktop1-dropdown-item">Purchase History</Link>
                </div>
              </div>
              <div className="desktop1-influencer-dropdown">
                <Link href="/influencerhover" className="desktop1-nav-button desktop1-influencer-button">
                  🎥 Influencer
                </Link>
                <div className="desktop1-dropdown-menu">
                  <Link href="/influencer/stats" className="desktop1-dropdown-item">Stats</Link>
                  <Link href="/influencer/channels" className="desktop1-dropdown-item">Main Channels</Link>
                  <Link href="/influencer/history" className="desktop1-dropdown-item">Campaign History</Link>
                  <Link href="/influencer/terms" className="desktop1-dropdown-item">Rate/Terms</Link>
                  <Link href="/influencer/earnings" className="desktop1-dropdown-item">Earnings</Link>
                  <Link href="/influencer/recruiter" className="desktop1-dropdown-item">Recruiter Info</Link>
                </div>
              </div>
              <div className="desktop1-recruiter-dropdown">
                <Link href="/recruiterhover" className="desktop1-nav-button desktop1-recruiter-button">
                  🎯 Recruiter
                </Link>
                <div className="desktop1-dropdown-menu">
                  <Link href="/recruiter/stats" className="desktop1-dropdown-item">Stats</Link>
                  <Link href="/recruiter/earnings" className="desktop1-dropdown-item">Earnings</Link>
                  <Link href="/recruiter/referral" className="desktop1-dropdown-item">Referral Link + QR</Link>
                </div>
              </div>
              <div className="desktop1-bounty-dropdown">
                <Link href="/bountyhover" className="desktop1-nav-button desktop1-bounty-button">
                  💰 Bounties/Ads
                </Link>
                <div className="desktop1-dropdown-menu">
                  <Link href="/bounty/board" className="desktop1-dropdown-item">Bounty Board</Link>
                  <Link href="/bounty/active" className="desktop1-dropdown-item">My Active Bounties</Link>
                  <Link href="/bounty/completed" className="desktop1-dropdown-item">Completed Bounties</Link>
                  <Link href="/bounty/place" className="desktop1-dropdown-item">Place Bounty</Link>
                </div>
              </div>
              <div className="desktop1-scoreboard-dropdown">
                <Link href="/scoreboard" className="desktop1-nav-button desktop1-scoreboard-button">
                  🏆 Scoreboard
                </Link>
                <div className="desktop1-dropdown-menu">
                  <Link href="/scoreboard/promoters" className="desktop1-dropdown-item">Top Promoters</Link>
                  <Link href="/scoreboard/influencers" className="desktop1-dropdown-item">Top Influencers</Link>
                  <Link href="/scoreboard/recruiters" className="desktop1-dropdown-item">Top Recruiters</Link>
                </div>
              </div>
              <div className="desktop1-earnings-dropdown">
                <Link href="/earnings" className="desktop1-nav-button desktop1-earnings-button">
                  💸 Earnings
                </Link>
                <div className="desktop1-dropdown-menu">
                  <Link href="/earnings/balance" className="desktop1-dropdown-item">Current Balance</Link>
                  <Link href="/earnings/lifetime" className="desktop1-dropdown-item">Lifetime Earnings</Link>
                  <Link href="/earnings/pending" className="desktop1-dropdown-item">Pending Payouts</Link>
                  <Link href="/earnings/withdraw" className="desktop1-dropdown-item">Withdraw / Payout Settings</Link>
                </div>
              </div>
              <div className="desktop1-profile-dropdown">
                <Link href="/settings" className="desktop1-nav-button desktop1-profile-button">
                  ⚙️ Profile
                </Link>
                <div className="desktop1-dropdown-menu">
                  <Link href="/profile/info" className="desktop1-dropdown-item">Personal Info</Link>
                  <Link href="/profile/payout" className="desktop1-dropdown-item">Payout Methods</Link>
                  <Link href="/profile/accounts" className="desktop1-dropdown-item">Linked Accounts</Link>
                  <Link href="/profile/notifications" className="desktop1-dropdown-item">Notifications</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desktop1
