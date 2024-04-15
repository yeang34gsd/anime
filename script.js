document.addEventListener('DOMContentLoaded', function () {

    const imagesWithDescription = [

        { imageUrl: 'https://i.pinimg.com/236x/57/00/c1/5700c1a0be5a49ffd1a0b9a8b243a953.jpg', description: 'Goku Ultra instinto' },

        { imageUrl: 'https://i.pinimg.com/236x/69/a9/50/69a950cb3087d31940d64f10aef2309a.jpg', description: 'Goku blue ' },
    
  { imageUrl: 'https://i.pinimg.com/236x/66/70/b1/6670b17023dacc00b6fcf329ff70c867.jpg', description: 'Goku y Vegeta' },

  { imageUrl: 'https://i.pinimg.com/236x/8b/7e/85/8b7e85054d6f27e68108d4a4cb103bb2.jpg', description: 'Goku Black' }, 

  { imageUrl: 'https://i.pinimg.com/236x/68/06/ba/6806ba0ae4658674741452b1d81e6c25.jpg', description: 'Goku black' }, 

  { imageUrl: 'https://i.pinimg.com/236x/92/35/8d/92358d67653aff4656524b07b50f0a30.jpg', description: 'Goku fase Dios' },

  { imageUrl: 'https://i.pinimg.com/236x/87/81/d3/8781d34c454436beadecb7c3a6d94fa3.jpg', description: 'Vegito' }, 

  { imageUrl: 'https://i.pinimg.com/236x/63/e6/9d/63e69d883bff06e94bdb2c761b1e6f4b.jpg', description: 'Black goku' },

  { imageUrl: 'https://i.pinimg.com/236x/16/2e/50/162e5056ce36a2efcdf2caeed48a64c2.jpg', description: 'Goku Super Saiyan' },
        { imageUrl: 'https://i.pinimg.com/236x/f7/4b/25/f74b25af43028a54950dce2c02060b6a.jpg', description: 'Goku y Vegeta' },

  { imageUrl: 'https://i.pinimg.com/236x/a8/2d/14/a82d1474bb3bc54c841e819dd52aefdc.jpg', description: 'Goku Ultra Instinto' },

  { imageUrl: 'https://i.pinimg.com/236x/ad/fa/86/adfa86338fa7617d8285893e31004e6c.jpg', description: 'Goku Super Saiyan' },

  { imageUrl: 'https://i.pinimg.com/236x/d2/4b/93/d24b93579304bddba38c4d7bd15696e5.jpg', description: ' transformaciónes de Goku ' },

  { imageUrl: 'https://i.pinimg.com/236x/ec/b1/b6/ecb1b68754e6428411f14b5d49e13199.jpg', description: 'Goku Super Saiyan' },

  { imageUrl: 'https://i.pinimg.com/236x/56/e9/eb/56e9eb3cdb111068d3ec30afee07d276.jpg', description: 'Ultra instinto ' },

  { imageUrl: 'https://i.pinimg.com/236x/76/8c/e5/768ce5a2a335ccfd8a60ccd25e52c948.jpg', description: 'Fases de goku' },

  { imageUrl: 'https://i.pinimg.com/236x/14/61/4c/14614cd9808466b29cdeb5257ee80f99.jpg', description: 'Ultra Instinto ' },
        
  { imageUrl: 'https://i.pinimg.com/236x/15/f9/05/15f905fa6f748ebc4d974dd83eed02e5.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/0a/a9/9f/0aa99fd35cf415c28bc0b02b4e0961cb.jpg', description: 'Sasuke Uchiha' },

  { imageUrl: 'https://i.pinimg.com/236x/ab/dc/52/abdc52db893674a7b5dcb767be8776e5.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/e7/b9/f4/e7b9f4c9673a1e6d011c10e794414439.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/5b/f0/f8/5bf0f89c2dcb06e64a08503fd9eb3c6b.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/98/15/91/98159112209ee0bcb06a13c55bdc78e5.jpg', description: 'Sasuke Uchiha' },

  { imageUrl: 'https://i.pinimg.com/236x/76/95/2b/76952b05299022f4f7bdff33b220d477.jpg', description: ' villanos de Naruto' },
      { imageUrl: 'https://i.pinimg.com/236x/b1/f3/95/b1f39583a8b9a174b63eac33c51c88fc.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/74/11/d9/7411d9ad3dda0ba42cbb3ec9fa5b0e24.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/1f/23/3c/1f233cab210553510a44d266b8a64daf.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/3f/39/cd/3f39cde94f688b1701503a174d4da20a.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/b7/0c/9e/b70c9ea4daba35d154e503a3df3ecc31.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/50/22/cc/5022ccb5981037042c991e3c3362677d.jpg', description: 'Naruto Uzumaki' },
         { imageUrl: 'https://i.pinimg.com/236x/33/8f/f7/338ff76ba896a42b535be655cac2bb5a.jpg', description: 'Naruto Uzumaki' },
 
     
      { imageUrl: 'https://i.pinimg.com/236x/39/e1/07/39e10728a957f3c9a5935ec132a2f44d.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/e4/a9/1d/e4a91d4ba9b7c16038526588906676d3.jpg', description: 'Naruto y Sasuke ' },

  { imageUrl: 'https://i.pinimg.com/236x/3a/a2/14/3aa2142212cd9bfd7b6b9bcaed6535cf.jpg', description: 'Kakashi Hatake' },

  { imageUrl: 'https://i.pinimg.com/236x/cf/6d/81/cf6d81ac67062f12c44ecf0696368db8.jpg', description: 'Naruto' },

  { imageUrl: 'https://i.pinimg.com/236x/25/d4/f8/25d4f88d9d7cd84adb730fb40d0f3096.jpg', description: 'Naruto' },

  { imageUrl: 'https://i.pinimg.com/236x/ea/71/ae/ea71aefab056b7564231fed301d19001.jpg', description: 'Kakashi Hatake' },

  { imageUrl: 'https://i.pinimg.com/236x/9a/8c/b9/9a8cb9427f94e7f576b6d8a91e7c78ab.jpg', description: 'Naruto' },
      
      { imageUrl: 'https://i.pinimg.com/236x/3b/5d/5c/3b5d5cf0a9b0a5e3b9aee024114dcc96.jpg', description: 'Kakashi Hatake' },

  { imageUrl: 'https://i.pinimg.com/236x/01/16/7c/01167ce6ee7a1c71e3b82422de3fe1c8.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/33/92/23/3392237d1223e6d2c12434b8c23626be.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/a1/4a/de/a14adef5f4bbdf0b3a9ab57ca0748d4a.jpg', description: 'Sakura Haruno' },
         { imageUrl: 'https://i.pinimg.com/236x/fe/7b/37/fe7b370926ae2e7d2b3d3166606cdf14.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/8b/ac/17/8bac179c5b1cfe02d174e5d7817cd78f.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/24/83/d5/2483d59868c973802a283e3b0e2bf3ad.jpg', description: 'Sakura Haruno' },
      
      { imageUrl: 'https://i.pinimg.com/236x/0f/89/11/0f8911cadb819ff6401026501bd659eb.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/bf/7e/30/bf7e30218be2cf803c051266cbc000f6.jpg', description: 'Sakura Haruno' },


        
  { imageUrl: 'https://i.pinimg.com/236x/45/2c/1b/452c1b9223715b57f3f3b4c1a5361c4f.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/69/52/06/69520667179357ff7df2b39d968bf2fc.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/2e/7b/d4/2e7bd481377084fe6108e3a58848aca3.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/77/3b/5a/773b5a960dedfc1c580289dd3fe8d3d9.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/54/ee/43/54ee43cc57c32be20a03e036520c44f8.jpg', description: 'Hinata Hyūga' },
  { imageUrl: 'https://i.pinimg.com/236x/e2/a6/87/e2a687cbdda087e7a00e1a188479129f.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/474x/09/9c/1e/099c1eb7734fdd126a313711c5021037.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/8d/c2/7f/8dc27f41b0f665367a6bcf2f4dd93d0c.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/15/49/70/154970cf412d5d58a87efe5448d71a7e.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/6a/e6/04/6ae604758a1cf58ba999464a446179a3.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/5d/b3/dd/5db3dd3d13953fa38fe7d9978a4b8bd8.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/42/0c/a8/420ca8abbb375d29f482c3f90e1bfd60.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/ae/b6/c7/aeb6c75275f7535b2c6974e839a86771.jpg', description: 'Kakashi Hatake' },


        { imageUrl: 'https://i.pinimg.com/236x/54/8e/32/548e326b84782d237948ede8ec52b452.jpg', description: 'Hinata Hyūga' },

  { imageUrl: 'https://i.pinimg.com/236x/4c/e4/4b/4ce44b26d5fcfaf30fd2e9d12eeae2ce.jpg', description: 'Hinata Hyūga' },

  { imageUrl: 'https://i.pinimg.com/236x/18/c6/2b/18c62bcb3a230aa0993e86d4abdfb8a1.jpg', description: 'Hinata Hyūga' },

  { imageUrl: 'https://i.pinimg.com/236x/6f/7e/6c/6f7e6cc5f8348aa83429c1531df61e58.jpg', description: 'Hinata Hyūga' },

  { imageUrl: 'https://i.pinimg.com/236x/5a/43/1b/5a431b37c5380e9ef9a9b39318bdc33f.jpg', description: 'Hinata Hyūga' },

  { imageUrl: 'https://i.pinimg.com/236x/81/a3/49/81a349949202a363ca2f7b8d1c342795.jpg', description: 'Hinata Hyūga' },

  { imageUrl: 'https://i.pinimg.com/236x/db/b9/c7/dbb9c7b6991fa29f2cc58d111dbe9369.jpg', description: 'Hinata Hyūga' },

  { imageUrl: 'https://i.pinimg.com/236x/6b/6e/a2/6b6ea2c1edbf42c77d918146fb6e8f49.jpg', description: 'Hinata Hyūga' },
  { imageUrl: 'https://i.pinimg.com/236x/ec/77/64/ec77640a70d388ab3689b922b488e000.jpg', description: 'Konosuba' },

  { imageUrl: 'https://i.pinimg.com/236x/24/b5/8f/24b58f5e5dc009636efe8a9084d7b0a2.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/0e/ae/c4/0eaec41d72a9328d0f50353890a0d424.jpg', description: 'konosuba' },

  { imageUrl: 'https://i.pinimg.com/236x/0e/dc/ce/0edccebe78fc9e5e551438e876f82e51.jpg', description: 'Konosuba Soketto ' },

  { imageUrl: 'https://i.pinimg.com/236x/d4/66/83/d46683997607c31bd4164235535868e2.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/22/b4/06/22b406ef81cf16910f350867f595a19a.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/31/0d/e5/310de502504f4771403405645cc89508.jpg', description: 'Darkness' },

  { imageUrl: 'https://i.pinimg.com/236x/60/a1/48/60a148da197773a9297132f006d0ffde.jpg', description: 'Konosuba' },

  { imageUrl: 'https://i.pinimg.com/236x/b2/f0/49/b2f0496d8f49dd402d3024695c0e7931.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/f3/a3/18/f3a3181f5bb0587e8fdc52c80283291d.jpg', description: 'Konosuba' },

  { imageUrl: 'https://i.pinimg.com/236x/1c/2c/cb/1c2ccbfe3cfee7f23da741962e246500.jpg', description: 'Konosuba diosa aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/52/36/99/52369920c3e2ed874afea75924918a85.jpg', description: 'Darkness' },


{ imageUrl: 'https://i.pinimg.com/236x/07/d8/47/07d8479af55aa569992108dd2ad56224.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/cf/dd/7d/cfdd7d1b8b14dca761f9a36c4ece63e6.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/5c/bb/5f/5cbb5fb80595b31719767e21a2a437ab.jpg', description: 'Darkness' },

  { imageUrl: 'https://i.pinimg.com/236x/94/16/9b/94169b538fdcd580411b954789724d77.jpg', description: 'Megumin' },

        { imageUrl: 'https://i.pinimg.com/236x/00/f5/f2/00f5f20cce6ba1e4d793e41d48280029.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/736x/be/c0/eb/bec0ebeffd86916e0f8d5ddf4eed2dcb.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/12/7c/84/127c84b69c37a56c3e638a2c7ba3e054.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/2d/bc/07/2dbc07b9299db80f1ab9eaa2657c1998.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/736x/15/ca/c6/15cac69373ff3122998a8cdedd828688.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/23/4b/a0/234ba02479ea45b251c8994474d83e65.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/cf/cb/39/cfcb39ffaca3e08648a71ec5a3111d75.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/fd/05/84/fd058487ba21633301f380d0815f8bfe.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/3c/2e/c6/3c2ec68bf886fa49ab4ede32918d7285.jpg', description: 'Megumin' },
        


        { imageUrl: 'https://i.pinimg.com/236x/a0/06/fe/a006fe29315ea6dc30756e8ca3328ebf.jpg', description: 'Darkness' },

  { imageUrl: 'https://i.pinimg.com/236x/38/7b/fe/387bfeaf462bf17f94efd0c6a4731c5f.jpg', description: 'Darkness' },

  { imageUrl: 'https://i.pinimg.com/236x/1f/43/7a/1f437a371da4a5070430c54f9a99c305.jpg', description: 'Darkness' },

  { imageUrl: 'https://i.pinimg.com/236x/fb/3a/78/fb3a788afd05a76ad266edce447a65c7.jpg', description: 'Darkness' },

  { imageUrl: 'https://i.pinimg.com/236x/fc/78/52/fc7852109bdca81519be2e6445518ce7.jpg', description: 'Darkness' },

  { imageUrl: 'https://i.pinimg.com/236x/0e/8d/77/0e8d779bdb2186f2c61695c2f49e6044.jpg', description: 'Megumin' },

  { imageUrl: 'https://i.pinimg.com/236x/f4/45/73/f445731653df54a117e862a6ec39bc8f.jpg', description: 'Darkness' },

  { imageUrl: 'https://i.pinimg.com/236x/71/c7/25/71c725021873b94a702576160fca9475.jpg', description: 'Darkness' },

  { imageUrl: 'https://i.pinimg.com/236x/fc/6b/94/fc6b9456e03761168da756202b67c3b8.jpg', description: 'Darkness' },

  { imageUrl: 'https://i.pinimg.com/236x/bc/42/70/bc4270d3527a89a12ab536e150aca566.jpg', description: 'Darkness' },
        

        { imageUrl: 'https://i.pinimg.com/236x/04/45/0e/04450ed28db6a61d6a3d664d6ce481f9.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/474x/78/c8/cc/78c8cc62a7961f126d28525aa67aa8e1.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/09/71/37/097137fc8c20bf089f1c1bf982766a37.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/dc/57/7b/dc577bebd8cd5f2741abb633e5dfe503.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/b4/cc/70/b4cc70cc284b91965f72a86b9cbe4875.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/82/09/9e/82099e769d03e103e7b6996aa17b342e.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/1a/ca/9b/1aca9b01683b6e6acff5c5b6313b2070.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/88/ad/67/88ad67a14d41e985cc1655f35c5f0406.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/05/91/be/0591bef3c7713f7ef00a890c5739c3c5.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/ff/9f/16/ff9f169147abf91f69743567517744a5.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/75/ac/81/75ac815ee8759a9fe96042fe12e43fa9.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/86/c2/7b/86c27bfe42db3c7ed4ef1aac8b759cee.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/7e/00/12/7e0012057dd306905587eee503c41b32.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/93/70/43/9370439a44f212f9239b981cd0c2b815.jpg', description: 'Aqua' },

  { imageUrl: 'https://i.pinimg.com/236x/07/b1/45/07b1453eb9e3451146e09f409f9337fd.jpg', description: 'Aqua' },
        


        { imageUrl: 'https://i.pinimg.com/236x/2c/25/30/2c25300d38e4d375ec2d2b9730d2fb58.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/55/14/55/551455ba5c8671c34a575303cc97834d.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/8f/ef/06/8fef0639391ab3cd731c45c247414b1a.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/67/9e/ff/679eff130952f24c65d0bfa2bb5eb274.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/8c/fa/55/8cfa558be23be8d719140ce4e1d4ffbf.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/5b/7b/9c/5b7b9c3eebf69b3a051d968550cb2cee.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/96/17/93/9617932ff74cbf3016b35c8417ef12eb.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/be/46/80/be46809c2fc8654535693b9ebc60c7d3.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/dd/5b/60/dd5b6017eea55d7447422ee0206f4a87.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/e5/c3/aa/e5c3aa8d9e0d97f4c5946a2122059a21.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/ce/68/6f/ce686fea39748fb45df692252876cd69.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/33/c8/07/33c8073079eb298959bec2563cb5908e.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/5c/db/09/5cdb09c55bceddbe99670372780546ae.jpg', description: 'One Piece' },
   { imageUrl: 'https://i.pinimg.com/236x/e2/11/fa/e211fab99f55b251d81cbd75bc964936.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/474x/13/5c/5b/135c5b7279aa1b655965c41d446c2d7f.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/61/44/54/614454585dd4b7320857d822f5a8d51d.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/f5/ae/79/f5ae79e7a568ac8009e9f868e0b96d22.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/d6/1d/97/d61d9799dae3feb2b1d2b01026b65bf2.jpg', description: 'One Piece Luffy' },

  { imageUrl: 'https://i.pinimg.com/236x/78/cd/00/78cd0017031e7063341f407a9232a69e.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/4d/a9/56/4da95684ba3ac7b74dbc52aafc3684d5.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/cc/4b/a1/cc4ba13fafa15cff757a69683b9f1205.jpg', description: 'One Piece' },

  { imageUrl: 'https://i.pinimg.com/236x/fc/f4/8f/fcf48f11cceb012fe3b80ed554802337.jpg', description: 'Luffy De One Piece' },

        { imageUrl: 'https://i.pinimg.com/236x/14/63/74/1463742a8895ecd21b8b9b8a85ffaafe.jpg', description: 'One Piece' },
      
      { imageUrl: 'https://i.pinimg.com/236x/ab/15/83/ab15838ae8410f07f3a3cc0d09beef58.jpg', description: 'One Piece' },
      
      { imageUrl: 'https://i.pinimg.com/236x/50/37/fe/5037fe55baaef0f60477cf4c6e92fa7d.jpg', description: 'One Piece' }, 
      
      { imageUrl: 'https://i.pinimg.com/236x/cf/6f/22/cf6f228ee8509c716aff981b234cf724.jpg', description: 'One Piece' },
      
      { imageUrl: 'https://i.pinimg.com/236x/b0/3f/e2/b03fe21c12554e718d115d26ab182a76.jpg', description: 'One Piece' },
      
      { imageUrl: 'https://i.pinimg.com/236x/06/cf/81/06cf81a6f5ccc91a8b15942d5501440d.jpg', description: 'One Piece' }, 
      
      { imageUrl: 'https://i.pinimg.com/236x/ba/e3/65/bae36540c30397f257152811211dee58.jpg', description: 'One Piece' }, 
      
      { imageUrl: 'https://i.pinimg.com/236x/f1/03/5d/f1035d9e1bbae8ba4f8232434b7e8d7c.jpg', description: 'One Piece' }, 
      
      { imageUrl: 'https://i.pinimg.com/236x/3e/85/5d/3e855d28e61f7ad07b49306ebe3825c0.jpg', description: 'One Piece' },


    

        { 
            imageUrl: 'https://i.pinimg.com/236x/57/00/c1/5700c1a0be5a49ffd1a0b9a8b243a953.jpg', 
            description: 'Goku Super Saiyan', 
            keywords: ['goku', 'super saiyan', 'anime'] 
        },

        // Agregar más objetos con URLs de imágenes, descripciones y palabras clave según sea necesario

    ];

    // Mezclar el arreglo de imágenes de forma aleatoria

    imagesWithDescription.sort(() => Math.random() - 0.5);

    const gridContainer = document.getElementById('grid-container');

    function renderImages(images) {

        gridContainer.innerHTML = '';

        images.forEach(image => {

            const card = document.createElement('div');

            card.classList.add('card');

            const img = document.createElement('img');

            img.src = image.imageUrl;

            const description = document.createElement('div');

            description.classList.add('description');

            description.textContent = image.description;

            const downloadIcon = document.createElement('div');

            downloadIcon.classList.add('download-icon');

            downloadIcon.addEventListener('click', function() {

                abrirVistaPrevia(image.imageUrl);

            });

            card.appendChild(img);

            card.appendChild(description);

            card.appendChild(downloadIcon);

            gridContainer.appendChild(card);

        });
    }

    function buscarImagenes(query) {
        const resultados = imagesWithDescription.filter(image =>
            image.description.toLowerCase().includes(query.toLowerCase()) ||
            image.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
        );

        renderImages(resultados);
    }

    function abrirVistaPrevia(url) {

        window.open(url, '_blank');

    }

    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', function(event) {

        const query = event.target.value.trim();

        buscarImagenes(query);

    });

    // Renderizar las imágenes al cargar la página

    renderImages(imagesWithDescription);

    document.getElementById("crear-button").addEventListener("click", function() {

        var galeria = document.getElementById("grid-container");

        if (galeria.style.display === "block") {

            galeria.style.display = "none";

            document.getElementById("crear-form").style.display = "block"; // Mostrar el segundo código HTML

        } else {

            galeria.style.display = "block";

            document.getElementById("crear-form").style.display = "none"; // Ocultar el segundo código HTML

        }

    });

    // Función para mostrar la galería correspondiente a la categoría seleccionada

    function mostrarCategoria(categoria) {

        // Ocultamos todas las galerías

        var galerias = document.getElementsByClassName("galeria");

        for (var i = 0; i < galerias.length; i++) {

            galerias[i].style.display = "none";

        }

        // Mostramos la galería de la categoría seleccionada

        document.getElementById("galeria-" + categoria).style.display = "block";

    }

    // Obtener todos los elementos con la clase "download-icon"

    const downloadIcons = document.querySelectorAll('.download-icon');

    // Iterar sobre cada ícono de descarga

    downloadIcons.forEach(icon => {

        // Agregar un evento de clic a cada ícono

        icon.addEventListener('click', () => {

            // Obtener la imagen asociada al ícono de descarga

            const image = icon.previousElementSibling;

            // Crear la URL de la imagen

            const imageUrl = image.src;

            // Abrir una nueva página con la imagen

            window.open(imageUrl, '_blank');

        });

    });

});





const imagenesPorCategoria = {

    "chibi": [

        { url: "https://i.pinimg.com/236x/8e/f6/ab/8ef6ab8be1b190d489477a64178b7f7c.jpg", descripcion: "Descripción de la imagen 1" },

        { url: "imagen2.jpg", descripcion: "Descripción de la imagen 2" },

    ],

    
};

function mostrarCategoria(categoria) {

    const galeria = document.getElementById("gallery");

    galeria.innerHTML = "";

    const imagenes = imagenesPorCategoria[categoria];

    if (imagenes) {

        shuffle(imagenes);

        

        imagenes.forEach(function(imagen) {

            const gridItem = document.createElement("div");

            gridItem.className = "grid-item";

            const img = document.createElement("img");

            img.src = imagen.url;

            img.alt = categoria;

            const descripcion = document.createElement("div");

            descripcion.className = "description";

            descripcion.textContent = imagen.descripcion;

            const downloadIcon = document.createElement("div");

            downloadIcon.className = "download-icon";

            downloadIcon.innerHTML = "&#x2B07;";

            downloadIcon.addEventListener('click', function() {

                window.open(imagen.url, '_blank');

            });
            gridItem.appendChild(img);

            gridItem.appendChild(descripcion);

            gridItem.appendChild(downloadIcon);

            galeria.appendChild(gridItem);

        });

    }

}

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

}

window.onload = function() {

    const categorias = Object.keys(imagenesPorCategoria);

    const categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];

    mostrarCategoria(categoriaAleatoria);

};
        

        

        
        





const imagenesPorCategoria = {

    "chibi": [

        { url: "https://i.pinimg.com/236x/8e/f6/ab/8ef6ab8be1b190d489477a64178b7f7c.jpg", descripcion: "Descripción de la imagen 1" },

        { url: "imagen2.jpg", descripcion: "Descripción de la imagen 2" },

    ],

    
};

function mostrarCategoria(categoria) {

    const galeria = document.getElementById("gallery");

    galeria.innerHTML = "";

    const imagenes = imagenesPorCategoria[categoria];

    if (imagenes) {

        shuffle(imagenes);

        

        imagenes.forEach(function(imagen) {

            const gridItem = document.createElement("div");

            gridItem.className = "grid-item";

            const img = document.createElement("img");

            img.src = imagen.url;

            img.alt = categoria;

            const descripcion = document.createElement("div");

            descripcion.className = "description";

            descripcion.textContent = imagen.descripcion;

            const downloadIcon = document.createElement("div");

            downloadIcon.className = "download-icon";

            downloadIcon.innerHTML = "&#x2B07;";

            downloadIcon.addEventListener('click', function() {

                window.open(imagen.url, '_blank');

            });
            gridItem.appendChild(img);

            gridItem.appendChild(descripcion);

            gridItem.appendChild(downloadIcon);

            galeria.appendChild(gridItem);

        });

    }

}

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

}

window.onload = function() {

    const categorias = Object.keys(imagenesPorCategoria);

    const categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];

    mostrarCategoria(categoriaAleatoria);

};
    


const imagenesPorCategoria = {

    "chibi": [

        { url: "https://i.pinimg.com/236x/8e/f6/ab/8ef6ab8be1b190d489477a64178b7f7c.jpg", descripcion: "Descripción de la imagen 1" },

        { url: "imagen2.jpg", descripcion: "Descripción de la imagen 2" },

    ],

    
};

function mostrarCategoria(categoria) {

    const galeria = document.getElementById("gallery");

    galeria.innerHTML = "";

    const imagenes = imagenesPorCategoria[categoria];

    if (imagenes) {

        shuffle(imagenes);

        

        imagenes.forEach(function(imagen) {

            const gridItem = document.createElement("div");

            gridItem.className = "grid-item";

            const img = document.createElement("img");

            img.src = imagen.url;

            img.alt = categoria;

            const descripcion = document.createElement("div");

            descripcion.className = "description";

            descripcion.textContent = imagen.descripcion;

            const downloadIcon = document.createElement("div");

            downloadIcon.className = "download-icon";

            downloadIcon.innerHTML = "&#x2B07;";

            downloadIcon.addEventListener('click', function() {

                window.open(imagen.url, '_blank');

            });
            gridItem.appendChild(img);

            gridItem.appendChild(descripcion);

            gridItem.appendChild(downloadIcon);

            galeria.appendChild(gridItem);

        });

    }

}

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

}

window.onload = function() {

    const categorias = Object.keys(imagenesPorCategoria);

    const categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];

    mostrarCategoria(categoriaAleatoria);

};







const imagenesPorCategoria = {

    "chibi": [

        { url: "https://i.pinimg.com/236x/8e/f6/ab/8ef6ab8be1b190d489477a64178b7f7c.jpg", descripcion: "Descripción de la imagen 1" },

        { url: "imagen2.jpg", descripcion: "Descripción de la imagen 2" },

    ],

    "moda": [

        { url: "imagen3.jpg", descripcion: "Descripción de la imagen 3" },

        { url: "imagen4.jpg", descripcion: "Descripción de la imagen 4" },

    ],

    "wallpaper ": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],
  
  
  "Vehículos ": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],
  "dibujos": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],
  
  
  "Artistas": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],


    "Futurista ": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],
  
  "memes": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],
  
  "noticias": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],
  
  "naturaleza ": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],
  
  "🔞🍑🔞": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],
  
  
  "Anime": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],

    
};

function mostrarCategoria(categoria) {

    const galeria = document.getElementById("gallery");

    galeria.innerHTML = "";

    const imagenes = imagenesPorCategoria[categoria];

    if (imagenes) {

        shuffle(imagenes);

        

        imagenes.forEach(function(imagen) {

            const gridItem = document.createElement("div");

            gridItem.className = "grid-item";

            const img = document.createElement("img");

            img.src = imagen.url;

            img.alt = categoria;

            const descripcion = document.createElement("div");

            descripcion.className = "description";

            descripcion.textContent = imagen.descripcion;

            const downloadIcon = document.createElement("div");

            downloadIcon.className = "download-icon";

            downloadIcon.innerHTML = "&#x2B07;";

            downloadIcon.addEventListener('click', function() {

                window.open(imagen.url, '_blank');

            });
            gridItem.appendChild(img);

            gridItem.appendChild(descripcion);

            gridItem.appendChild(downloadIcon);

            galeria.appendChild(gridItem);

        });

    }

}

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

}

window.onload = function() {

    const categorias = Object.keys(imagenesPorCategoria);

    const categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];

    mostrarCategoria(categoriaAleatoria);

};
