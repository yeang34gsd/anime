 document.addEventListener('DOMContentLoaded', function () {

    const imagesWithDescription = [

        { 
    imageUrl: 'https://i.pinimg.com/236x/57/00/c1/5700c1a0be5a49ffd1a0b9a8b243a953.jpg', 
    description: 'Goku Ultra instinto',
    keywords: ['Vegeta', 'Jiren', 'Whis', 'Kaiōshin', 'Bills']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/69/a9/50/69a950cb3087d31940d64f10aef2309a.jpg', 
    description: 'Goku blue',
    keywords: ['Trunks', 'Goten', 'Freezer', 'Cell', 'Majin Buu']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/66/70/b1/6670b17023dacc00b6fcf329ff70c867.jpg', 
    description: 'Goku y Vegeta',
    keywords: ['Gohan', 'Piccolo', 'Majin Buu', 'Tenshinhan', 'Yamcha']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/8b/7e/85/8b7e85054d6f27e68108d4a4cb103bb2.jpg', 
    description: 'Goku Black',
    keywords: ['Zamasu', 'Trunks del futuro', 'Gowasu', 'Mai', 'Bulma']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/68/06/ba/6806ba0ae4658674741452b1d81e6c25.jpg', 
    description: 'Goku black',
    keywords: ['Gowasu', 'Zamasu', 'Trunks del futuro', 'Mai', 'Bulma']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/92/35/8d/92358d67653aff4656524b07b50f0a30.jpg', 
    description: 'Goku fase Dios',
    keywords: ['Bills', 'Whis', 'Kaiōshin', 'Kibito', 'Dende']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/87/81/d3/8781d34c454436beadecb7c3a6d94fa3.jpg', 
    description: 'Vegito',
    keywords: ['Gogeta', 'Zamasu', 'Majin Buu', 'Fusiones', 'Goku y Vegeta']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/63/e6/9d/63e69d883bff06e94bdb2c761b1e6f4b.jpg', 
    description: 'Black goku',
    keywords: ['Zamasu', 'Trunks del futuro', 'Gowasu', 'Mai', 'Bills']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/16/2e/50/162e5056ce36a2efcdf2caeed48a64c2.jpg', 
    description: 'Goku Super Saiyan',
    keywords: ['Gohan', 'Goten', 'Trunks', 'Vegeta', 'Piccolo']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/f7/4b/25/f74b25af43028a54950dce2c02060b6a.jpg', 
    description: 'Goku y Vegeta',
    keywords: ['Gohan', 'Piccolo', 'Majin Buu', 'Tenshinhan', 'Yamcha']
  },
     

     


{ 
    imageUrl: 'https://i.pinimg.com/236x/a8/2d/14/a82d1474bb3bc54c841e819dd52aefdc.jpg', 
    description: 'Goku Ultra Instinto',
    keywords: ['Vegeta', 'Jiren', 'Whis', 'Kaiōshin', 'Bills']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ad/fa/86/adfa86338fa7617d8285893e31004e6c.jpg', 
    description: 'Goku Super Saiyan',
    keywords: ['Gohan', 'Goten', 'Trunks', 'Vegeta', 'Piccolo']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/d2/4b/93/d24b93579304bddba38c4d7bd15696e5.jpg', 
    description: 'transformaciones de Goku',
    keywords: ['Gohan', 'Piccolo', 'Majin Buu', 'Tenshinhan', 'Yamcha']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ec/b1/b6/ecb1b68754e6428411f14b5d49e13199.jpg', 
    description: 'Goku Super Saiyan',
    keywords: ['Gohan', 'Goten', 'Trunks', 'Vegeta', 'Piccolo']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/56/e9/eb/56e9eb3cdb111068d3ec30afee07d276.jpg', 
    description: 'Ultra instinto',
    keywords: ['Vegeta', 'Jiren', 'Whis', 'Kaiōshin', 'Bills']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/76/8c/e5/768ce5a2a335ccfd8a60ccd25e52c948.jpg', 
    description: 'Fases de Goku',
    keywords: ['Gohan', 'Piccolo', 'Majin Buu', 'Tenshinhan', 'Yamcha']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/14/61/4c/14614cd9808466b29cdeb5257ee80f99.jpg', 
    description: 'Ultra Instinto',
    keywords: ['Vegeta', 'Jiren', 'Whis', 'Kaiōshin', 'Bills']
  },

  { 
    imageUrl: 'https://i.pinimg.com/236x/15/f9/05/15f905fa6f748ebc4d974dd83eed02e5.jpg', 
    description: 'Sakura Haruno',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/0a/a9/9f/0aa99fd35cf415c28bc0b02b4e0961cb.jpg', 
    description: 'Sasuke Uchiha',
    keywords: ['Naruto Uzumaki', 'Sakura Haruno', 'Kakashi Hatake', 'Itachi Uchiha', 'Hinata Hyuga']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ab/dc/52/abdc52db893674a7b5dcb767be8776e5.jpg', 
    description: 'Naruto Uzumaki',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Jiraiya', 'Hinata Hyuga']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/e7/b9/f4/e7b9f4c9673a1e6d011c10e794414439.jpg', 
    description: 'Naruto Uzumaki',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Jiraiya', 'Hinata Hyuga']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/5b/f0/f8/5bf0f89c2dcb06e64a08503fd9eb3c6b.jpg', 
    description: 'Naruto Uzumaki',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Jiraiya', 'Hinata Hyuga']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/98/15/91/98159112209ee0bcb06a13c55bdc78e5.jpg', 
    description: 'Sasuke Uchiha',
    keywords: ['Naruto Uzumaki', 'Sakura Haruno', 'Kakashi Hatake', 'Itachi Uchiha', 'Hinata Hyuga']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/76/95/2b/76952b05299022f4f7bdff33b220d477.jpg', 
    description: 'villanos de Naruto',
    keywords: ['Akatsuki', 'Orochimaru', 'Madara Uchiha', 'Kabuto Yakushi', 'Zabuza Momochi']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/b1/f3/95/b1f39583a8b9a174b63eac33c51c88fc.jpg', 
    description: 'Naruto Uzumaki',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Jiraiya', 'Hinata Hyuga']
  },


 { 
    imageUrl: 'https://i.pinimg.com/236x/74/11/d9/7411d9ad3dda0ba42cbb3ec9fa5b0e24.jpg', 
    description: 'Naruto Uzumaki',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/1f/23/3c/1f233cab210553510a44d266b8a64daf.jpg', 
    description: 'Naruto Uzumaki',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/3f/39/cd/3f39cde94f688b1701503a174d4da20a.jpg', 
    description: 'Sakura Haruno',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/b7/0c/9e/b70c9ea4daba35d154e503a3df3ecc31.jpg', 
    description: 'Naruto Uzumaki',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/50/22/cc/5022ccb5981037042c991e3c3362677d.jpg', 
    description: 'Naruto Uzumaki',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/33/8f/f7/338ff76ba896a42b535be655cac2bb5a.jpg', 
    description: 'Naruto Uzumaki',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/39/e1/07/39e10728a957f3c9a5935ec132a2f44d.jpg', 
    description: 'Naruto Uzumaki',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/e4/a9/1d/e4a91d4ba9b7c16038526588906676d3.jpg', 
    description: 'Naruto y Sasuke',
    keywords: ['Sakura Haruno', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara', 'Itachi Uchiha']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/3a/a2/14/3aa2142212cd9bfd7b6b9bcaed6535cf.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/cf/6d/81/cf6d81ac67062f12c44ecf0696368db8.jpg', 
    description: 'Naruto',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/25/d4/f8/25d4f88d9d7cd84adb730fb40d0f3096.jpg', 
    description: 'Naruto',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ea/71/ae/ea71aefab056b7564231fed301d19001.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/9a/8c/b9/9a8cb9427f94e7f576b6d8a91e7c78ab.jpg', 
    description: 'Naruto',
    keywords: ['Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },    
  

  
{ 
    imageUrl: 'https://i.pinimg.com/236x/3b/5d/5c/3b5d5cf0a9b0a5e3b9aee024114dcc96.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/01/16/7c/01167ce6ee7a1c71e3b82422de3fe1c8.jpg', 
    description: 'Sakura Haruno',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/33/92/23/3392237d1223e6d2c12434b8c23626be.jpg', 
    description: 'Sakura Haruno',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/a1/4a/de/a14adef5f4bbdf0b3a9ab57ca0748d4a.jpg', 
    description: 'Sakura Haruno',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/fe/7b/37/fe7b370926ae2e7d2b3d3166606cdf14.jpg', 
    description: 'Sakura Haruno',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/8b/ac/17/8bac179c5b1cfe02d174e5d7817cd78f.jpg', 
    description: 'Sakura Haruno',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/24/83/d5/2483d59868c973802a283e3b0e2bf3ad.jpg', 
    description: 'Sakura Haruno',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/0f/89/11/0f8911cadb819ff6401026501bd659eb.jpg', 
    description: 'Sakura Haruno',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/bf/7e/30/bf7e30218be2cf803c051266cbc000f6.jpg', 
    description: 'Sakura Haruno',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/45/2c/1b/452c1b9223715b57f3f3b4c1a5361c4f.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/69/52/06/69520667179357ff7df2b39d968bf2fc.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/2e/7b/d4/2e7bd481377084fe6108e3a58848aca3.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/77/3b/5a/773b5a960dedfc1c580289dd3fe8d3d9.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/54/ee/43/54ee43cc57c32be20a03e036520c44f8.jpg', 
    description: 'Hinata Hyūga',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Shikamaru Nara']
  },
     

     
      
     


     
  { 
    imageUrl: 'https://i.pinimg.com/236x/e2/a6/87/e2a687cbdda087e7a00e1a188479129f.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/474x/09/9c/1e/099c1eb7734fdd126a313711c5021037.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/8d/c2/7f/8dc27f41b0f665367a6bcf2f4dd93d0c.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/15/49/70/154970cf412d5d58a87efe5448d71a7e.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/6a/e6/04/6ae604758a1cf58ba999464a446179a3.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/5d/b3/dd/5db3dd3d13953fa38fe7d9978a4b8bd8.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/42/0c/a8/420ca8abbb375d29f482c3f90e1bfd60.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ae/b6/c7/aeb6c75275f7535b2c6974e839a86771.jpg', 
    description: 'Kakashi Hatake',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Hinata Hyuga', 'Shikamaru Nara']
  },


{ 
    imageUrl: 'https://i.pinimg.com/236x/54/8e/32/548e326b84782d237948ede8ec52b452.jpg', 
    description: 'Hinata Hyūga',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/4c/e4/4b/4ce44b26d5fcfaf30fd2e9d12eeae2ce.jpg', 
    description: 'Hinata Hyūga',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/18/c6/2b/18c62bcb3a230aa0993e86d4abdfb8a1.jpg', 
    description: 'Hinata Hyūga',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/6f/7e/6c/6f7e6cc5f8348aa83429c1531df61e58.jpg', 
    description: 'Hinata Hyūga',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/5a/43/1b/5a431b37c5380e9ef9a9b39318bdc33f.jpg', 
    description: 'Hinata Hyūga',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/81/a3/49/81a349949202a363ca2f7b8d1c342795.jpg', 
    description: 'Hinata Hyūga',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/db/b9/c7/dbb9c7b6991fa29f2cc58d111dbe9369.jpg', 
    description: 'Hinata Hyūga',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Shikamaru Nara']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/6b/6e/a2/6b6ea2c1edbf42c77d918146fb6e8f49.jpg', 
    description: 'Hinata Hyūga',
    keywords: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Shikamaru Nara']
  },

     
{ 
    imageUrl: 'https://i.pinimg.com/236x/ec/77/64/ec77640a70d388ab3689b922b488e000.jpg', 
    description: 'Konosuba',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Darkness', 'Wiz']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/24/b5/8f/24b58f5e5dc009636efe8a9084d7b0a2.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/0e/ae/c4/0eaec41d72a9328d0f50353890a0d424.jpg', 
    description: 'Konosuba',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Darkness', 'Wiz']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/0e/dc/ce/0edccebe78fc9e5e551438e876f82e51.jpg', 
    description: 'Konosuba Soketto',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Darkness', 'Wiz']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/d4/66/83/d46683997607c31bd4164235535868e2.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/22/b4/06/22b406ef81cf16910f350867f595a19a.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/31/0d/e5/310de502504f4771403405645cc89508.jpg', 
    description: 'Darkness',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/60/a1/48/60a148da197773a9297132f006d0ffde.jpg', 
    description: 'Konosuba',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Darkness', 'Wiz']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/b2/f0/49/b2f0496d8f49dd402d3024695c0e7931.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/f3/a3/18/f3a3181f5bb0587e8fdc52c80283291d.jpg', 
    description: 'Konosuba',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Darkness', 'Wiz']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/1c/2c/cb/1c2ccbfe3cfee7f23da741962e246500.jpg', 
    description: 'Konosuba diosa Aqua',
    keywords: ['Kazuma Satou', 'Megumin', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/52/36/99/52369920c3e2ed874afea75924918a85.jpg', 
    description: 'Darkness',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Wiz', 'Luna']
  },

     
{ 
    imageUrl: 'https://i.pinimg.com/236x/07/d8/47/07d8479af55aa569992108dd2ad56224.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/cf/dd/7d/cfdd7d1b8b14dca761f9a36c4ece63e6.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/5c/bb/5f/5cbb5fb80595b31719767e21a2a437ab.jpg', 
    description: 'Darkness',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/94/16/9b/94169b538fdcd580411b954789724d77.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/00/f5/f2/00f5f20cce6ba1e4d793e41d48280029.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/736x/be/c0/eb/bec0ebeffd86916e0f8d5ddf4eed2dcb.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/12/7c/84/127c84b69c37a56c3e638a2c7ba3e054.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/2d/bc/07/2dbc07b9299db80f1ab9eaa2657c1998.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/736x/15/ca/c6/15cac69373ff3122998a8cdedd828688.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/23/4b/a0/234ba02479ea45b251c8994474d83e65.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/cf/cb/39/cfcb39ffaca3e08648a71ec5a3111d75.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/fd/05/84/fd058487ba21633301f380d0815f8bfe.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/3c/2e/c6/3c2ec68bf886fa49ab4ede32918d7285.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },


  { 
    imageUrl: 'https://i.pinimg.com/236x/a0/06/fe/a006fe29315ea6dc30756e8ca3328ebf.jpg', 
    description: 'Darkness',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/38/7b/fe/387bfeaf462bf17f94efd0c6a4731c5f.jpg', 
    description: 'Darkness',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/1f/43/7a/1f437a371da4a5070430c54f9a99c305.jpg', 
    description: 'Darkness',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/fb/3a/78/fb3a788afd05a76ad266edce447a65c7.jpg', 
    description: 'Darkness',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/fc/78/52/fc7852109bdca81519be2e6445518ce7.jpg', 
    description: 'Darkness',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/0e/8d/77/0e8d779bdb2186f2c61695c2f49e6044.jpg', 
    description: 'Megumin',
    keywords: ['Kazuma Satou', 'Aqua', 'Darkness', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/f4/45/73/f445731653df54a117e862a6ec39bc8f.jpg', 
    description: 'Darkness',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/71/c7/25/71c725021873b94a702576160fca9475.jpg', 
    description: 'Darkness',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/fc/6b/94/fc6b9456e03761168da756202b67c3b8.jpg', 
    description: 'Darkness',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/bc/42/70/bc4270d3527a89a12ab536e150aca566.jpg', 
    description: 'Darkness',
    keywords: ['Kazuma Satou', 'Aqua', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/04/45/0e/04450ed28db6a61d6a3d664d6ce481f9.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/474x/78/c8/cc/78c8cc62a7961f126d28525aa67aa8e1.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/09/71/37/097137fc8c20bf089f1c1bf982766a37.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/dc/57/7b/dc577bebd8cd5f2741abb633e5dfe503.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
     

 { 
    imageUrl: 'https://i.pinimg.com/236x/b4/cc/70/b4cc70cc284b91965f72a86b9cbe4875.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/82/09/9e/82099e769d03e103e7b6996aa17b342e.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/1a/ca/9b/1aca9b01683b6e6acff5c5b6313b2070.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/88/ad/67/88ad67a14d41e985cc1655f35c5f0406.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/05/91/be/0591bef3c7713f7ef00a890c5739c3c5.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ff/9f/16/ff9f169147abf91f69743567517744a5.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/75/ac/81/75ac815ee8759a9fe96042fe12e43fa9.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/86/c2/7b/86c27bfe42db3c7ed4ef1aac8b759cee.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/7e/00/12/7e0012057dd306905587eee503c41b32.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/93/70/43/9370439a44f212f9239b981cd0c2b815.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/07/b1/45/07b1453eb9e3451146e09f409f9337fd.jpg', 
    description: 'Aqua',
    keywords: ['Kazuma Satou', 'Darkness', 'Megumin', 'Wiz', 'Luna']
  },
     
    



{ 
    imageUrl: 'https://i.pinimg.com/236x/2c/25/30/2c25300d38e4d375ec2d2b9730d2fb58.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/55/14/55/551455ba5c8671c34a575303cc97834d.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/8f/ef/06/8fef0639391ab3cd731c45c247414b1a.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/67/9e/ff/679eff130952f24c65d0bfa2bb5eb274.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/8c/fa/55/8cfa558be23be8d719140ce4e1d4ffbf.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/5b/7b/9c/5b7b9c3eebf69b3a051d968550cb2cee.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/96/17/93/9617932ff74cbf3016b35c8417ef12eb.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/be/46/80/be46809c2fc8654535693b9ebc60c7d3.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/dd/5b/60/dd5b6017eea55d7447422ee0206f4a87.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/e5/c3/aa/e5c3aa8d9e0d97f4c5946a2122059a21.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper']
   },          


   
 
    
     {
    imageUrl: 'https://i.pinimg.com/236x/33/c8/07/33c8073079eb298959bec2563cb5908e.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/5c/db/09/5cdb09c55bceddbe99670372780546ae.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/e2/11/fa/e211fab99f55b251d81cbd75bc964936.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/474x/13/5c/5b/135c5b7279aa1b655965c41d446c2d7f.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/61/44/54/614454585dd4b7320857d822f5a8d51d.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },


{ 
    imageUrl: 'https://i.pinimg.com/236x/f5/ae/79/f5ae79e7a568ac8009e9f868e0b96d22.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/d6/1d/97/d61d9799dae3feb2b1d2b01026b65bf2.jpg', 
    description: 'One Piece Luffy',
    keywords: ['Monkey D. Luffy']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/78/cd/00/78cd0017031e7063341f407a9232a69e.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/4d/a9/56/4da95684ba3ac7b74dbc52aafc3684d5.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/cc/4b/a1/cc4ba13fafa15cff757a69683b9f1205.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/fc/f4/8f/fcf48f11cceb012fe3b80ed554802337.jpg', 
    description: 'Luffy De One Piece',
    keywords: ['Monkey D. Luffy']
  },

{ 
    imageUrl: 'https://i.pinimg.com/236x/14/63/74/1463742a8895ecd21b8b9b8a85ffaafe.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ab/15/83/ab15838ae8410f07f3a3cc0d09beef58.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/50/37/fe/5037fe55baaef0f60477cf4c6e92fa7d.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/cf/6f/22/cf6f228ee8509c716aff981b234cf724.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/b0/3f/e2/b03fe21c12554e718d115d26ab182a76.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/06/cf/81/06cf81a6f5ccc91a8b15942d5501440d.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ba/e3/65/bae36540c30397f257152811211dee58.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/f1/03/5d/f1035d9e1bbae8ba4f8232434b7e8d7c.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/3e/85/5d/3e855d28e61f7ad07b49306ebe3825c0.jpg', 
    description: 'One Piece',
    keywords: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe']
  },

   { 
    imageUrl: 'https://i.pinimg.com/236x/3f/7d/59/3f7d590ffccce0629e8714347e7b93e1.jpg', 
    description: 'Rem', 
    keywords: ['Rem', 'Emilia', 'Subaru Natsuki', 'Ram', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/af/05/0e/af050e97cd97bcfdb6e99d0ac327fa32.jpg', 
    description: 'Rem', 
    keywords: ['Rem', 'Emilia', 'Subaru Natsuki', 'Ram', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/cb/b9/77/cbb97760d41378eb71af755154ad3107.jpg', 
    description: 'Rem', 
    keywords: ['Rem', 'Emilia', 'Subaru Natsuki', 'Ram', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/14/e2/fc/14e2fc9daf18274f038b532b2506618c.jpg', 
    description: 'Rem', 
    keywords: ['Rem', 'Emilia', 'Subaru Natsuki', 'Ram', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/1a/84/90/1a8490d725410254f607e71fc3b078b6.jpg', 
    description: 'Rem', 
    keywords: ['Rem', 'Emilia', 'Subaru Natsuki', 'Ram', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/9c/22/d6/9c22d69e024acd9789618f16c2af64ff.jpg', 
    description: 'Rem', 
    keywords: ['Rem', 'Emilia', 'Subaru Natsuki', 'Ram', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/85/e2/21/85e22171db75eacc989c8bc109a3d552.jpg', 
    description: 'Rem', 
    keywords: ['Rem', 'Emilia', 'Subaru Natsuki', 'Ram', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/b0/04/9c/b0049cf189f2b78023ad953c67aa0c31.jpg', 
    description: 'Rem', 
    keywords: ['Rem', 'Emilia', 'Subaru Natsuki', 'Ram', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/3d/4e/a3/3d4ea3f3387cf73433ab955f7e6a278a.jpg', 
    description: 'Rem', 
    keywords: ['Rem', 'Emilia', 'Subaru Natsuki', 'Ram', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/5b/05/11/5b05117e9835f8c9b208f9d73298f8a1.jpg', 
    description: 'Rem', 
    keywords: ['Rem', 'Emilia', 'Subaru Natsuki', 'Ram', 'Beatrice', 'Roswaal L Mathers'] 
  },   

    

    { 
    imageUrl: 'https://i.pinimg.com/236x/3b/35/00/3b3500b6d02593d07872c31ab0b6b69d.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/77/35/dd/7735dd392dc2fae7bc198199b84d5d89.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/58/f8/7a/58f87a6cfa6b19c0d879e43878cce0da.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/59/e1/95/59e1957df4f6254e4bd22dbcbb9b1ef5.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/66/37/18/66371832e81e9289b16638e6eb1a281e.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/f0/3c/9b/f03c9b469511b470032f9ae608ecd24e.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/d5/ee/31/d5ee31b3ef877077e258dcf7f28dcb2f.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/d2/ea/34/d2ea34e06c86f490ac68a9136d809f70.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ca/e4/f6/cae4f6015ff0687feb9861e9a5061f9c.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/52/a3/66/52a3667131cefc021b30c491c79ce6fe.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },








     

  { 
    imageUrl: 'https://i.pinimg.com/236x/5e/10/0c/5e100c23fa1e5819da8301cea2ddd0a6.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/a4/13/e4/a413e41f706086d957a5fc8c7058b36d.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/f7/ed/9f/f7ed9f6afc2c0c98d6538f1000dcd219.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/89/a4/7f/89a47f0190318b3c3bcb9781eddc3308.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/b2/9b/b3/b29bb3a2b9826f2cb261b006b894aab1.jpg', 
    description: 'Ram', 
    keywords: ['Ram', 'Rem', 'Emilia', 'Subaru Natsuki', 'Beatrice', 'Roswaal L Mathers'] 
  },


     

{ 
    imageUrl: 'https://i.pinimg.com/236x/b8/06/c7/b806c775aec50bc17b7f23331f550992.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ac/1b/64/ac1b649240e4bf187f7169b8135ae253.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/a1/a0/80/a1a08097b4267814378c5c99c8d2e89c.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/b8/e4/af/b8e4af7e146537d545077d7268e43abe.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/5d/c5/e9/5dc5e99af4fd0fd66725d105ac80afe0.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/82/a8/e8/82a8e8aeb94b57721bd2ec39cecaa716.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/dc/3a/4f/dc3a4f9ec7caffc32c3a402765d38657.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/5a/0a/6e/5a0a6e6971937e0d5d3d3d4bd7c1b944.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/08/26/d4/0826d46068e56eeb08dded3a1ff10ad4.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ef/73/42/ef734235d1908eb778d4ea0431d33c6e.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },


 { 
    imageUrl: 'https://i.pinimg.com/236x/de/30/d8/de30d8af21640206f0d11fd19e924554.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ea/7e/66/ea7e668b33bc9e09a990d3ab43431bca.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/fc/13/b0/fc13b0c46f98212270ec7d83e396f957.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/4c/2d/49/4c2d49e339a323aa363861500d8857f3.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/3f/72/a1/3f72a1990e06b6df6285901ac59ce2a3.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ae/50/c0/ae50c04f3eabede9f356c7dd9bc6be71.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/25/c4/9c/25c49cc86fbc67a27facca518a34c307.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/c4/03/2e/c4032ec0308fcc68e1babe50cbe472eb.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/cf/c2/d5/cfc2d54c28617324d81d80aa138ffd43.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/b9/0f/a5/b90fa57f2a2475c01684ac7da3945dd4.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/d1/76/a7/d176a7d69d1001d24a6a9b95bbfd992c.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/5f/01/9b/5f019bef41cd79c0b1aedb3cd45d6ddc.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/aa/90/93/aa9093d319cc78b02941b7f332659bc0.jpg', 
    description: 'Memes Meme', 
    keywords: ['Memes'] 
  },    



{ 
    imageUrl: 'https://i.pinimg.com/736x/c1/6e/15/c16e15b46b58ed6ed79a7582000353db.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/736x/70/00/13/7000137efa20876ad09beb120bcd0579.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/c0/41/c6/c041c68dd0316cb8bf1839cac2910a5d.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/d1/1b/a4/d11ba445a198cd0808db8168088b8951.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/7a/2b/03/7a2b036b46943f69e2a890341960d98a.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/81/76/e8/8176e84ac0daec5c6da9c7d8672cbd60.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/736x/50/6f/a7/506fa77ca2d1079c17a060dc74aa1a06.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/736x/97/8e/12/978e12cc60511dac00abe3a1261a4af1.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/736x/5b/6b/fc/5b6bfcd4603342ba65011fda59812400.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/30/5e/36/305e36e686a5053535a93a417032406d.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ab/f6/af/abf6af594b405103611fc36b2ee520f8.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },


{ 
    imageUrl: 'https://i.pinimg.com/736x/c1/6e/15/c16e15b46b58ed6ed79a7582000353db.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/736x/70/00/13/7000137efa20876ad09beb120bcd0579.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/c0/41/c6/c041c68dd0316cb8bf1839cac2910a5d.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/d1/1b/a4/d11ba445a198cd0808db8168088b8951.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/7a/2b/03/7a2b036b46943f69e2a890341960d98a.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/81/76/e8/8176e84ac0daec5c6da9c7d8672cbd60.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/736x/50/6f/a7/506fa77ca2d1079c17a060dc74aa1a06.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/736x/97/8e/12/978e12cc60511dac00abe3a1261a4af1.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/736x/5b/6b/fc/5b6bfcd4603342ba65011fda59812400.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/30/5e/36/305e36e686a5053535a93a417032406d.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ab/f6/af/abf6af594b405103611fc36b2ee520f8.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/32/f6/78/32f678e5060c7cd245a8a8b087b1a94d.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/f3/a4/cc/f3a4ccfb1583ec9f726ef1159081d749.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/13/1e/28/131e285249ebab86fcd86be121785be0.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/c4/d1/86/c4d1868428ce0e88f4bf71cfd8e70e8a.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/26/67/41/26674143067a7b9dd8b2b694b063d1ed.jpg', 
    description: 'Pikachu', 
    keywords: ['Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Pikachu', 'Mewtwo'] 
  },
     
     
    

{ 
    imageUrl: 'https://i.pinimg.com/736x/d0/fb/0c/d0fb0c1cd145983a454e57b046178c8d.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/2c/1a/3d/2c1a3d9fcaa213eaae89b66341f22438.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/d2/af/fd/d2affd32aa34779b8384167591b6ae53.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/72/be/63/72be63348fa29f5803f58ec09b5654f5.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/29/9d/d2/299dd2422d015dcc083544676adbd571.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/fb/15/bd/fb15bdd6085c8156baf45f1a11a7e355.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/5c/5d/f9/5c5df9146f3b0812445f7e993bb95de6.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/df/bc/cd/dfbccd3a2a70de6ef863e4666b47d5d3.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/cb/9a/d8/cb9ad825e09240c43f67246d358a5ab5.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/b6/97/57/b6975790be10048e1db298a76c80acb5.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/736x/38/31/4c/38314ce9e6a38cc6d946d7be0ae8257b.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },


     { imageUrl: 'https://i.pinimg.com/236x/e7/96/5d/e7965da34c58e075b051474198ff5ecf.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
 },

     { 
    imageUrl: 'https://i.pinimg.com/236x/f6/6f/8e/f66f8e1562f7a1a5de423022a2119e96.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/20/87/b1/2087b165d994201319d33feab3fbb1b1.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/28/6f/c2/286fc26f84ff6379e3157a46a34d1d22.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/4f/7c/61/4f7c61460c3b7b02c170b466cc790ddc.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/0b/48/6c/0b486c9055cc1688912ed4c1fe7da36e.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/09/1d/52/091d5212a672e6797c0417957624970b.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/c7/5f/ee/c75feeba5c9de67ba962ce1e6c22010d.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/df/bc/cd/dfbccd3a2a70de6ef863e4666b47d5d3.jpg', 
    description: 'Tanjiro Kamado', 
    keywords: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Shinobu Kocho'] 
  },



  { 
    imageUrl: 'https://i.pinimg.com/236x/e3/2b/ae/e32bae98ef9b30df3437050405344536.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/f2/ad/47/f2ad47458c055d1f0faddf3e620ad45d.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/ac/94/4e/ac944edfc16318a289ba8109fb7ced73.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/89/d2/90/89d2901de2c1c83c0e5ec273c7ba5430.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/28/db/c2/28dbc29a99eca8823c644b4d64583533.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/53/f0/de/53f0de6e8f54fd318f9c54049550f0ec.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/35/34/9a/35349af23d5b8783e82d13452007ade2.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/14/47/17/14471797b86a98f3eceaf761b67849cd.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/47/8c/fc/478cfc35d1d2c23515a4823453995ed5.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/25/97/ab/2597ab7d08ec6eaa71976774ca758406.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/44/81/56/44815615fbd4f513b39ee9f7cc8f23e4.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/92/1f/36/921f36d126360a2bec65bc6bda041475.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/d6/05/17/d605177c1e5d5011166eb2ce3f47ec3f.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/e4/b4/e7/e4b4e73eebda3c51dcd578c0b21aa0cc.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/d0/0b/0c/d00b0c2ae4692d0335ddda1c2c34af1f.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/04/24/79/042479927dcd34e3d12d8c43cff20280.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/d3/79/a7/d379a7cf50e5490856ff224fc454a1fb.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/2b/7a/46/2b7a4633a586151ec4fb5c99bd706eb9.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/34/32/b7/3432b725021cab2092b615258787010f.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/5a/06/63/5a0663c72a42bbed0d04112b7be18733.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },
  { 
    imageUrl: 'https://i.pinimg.com/236x/dd/d3/83/ddd3838dab4a88c5aae187ee128e2868.jpg', 
    description: 'memes meme', 
    keywords: ['memes'] 
  },


     

     
    // Agregar más objetos con URLs de imágenes, descripciones y palabras clave según sea necesario
    ];

    const gridContainer = document.getElementById('grid-container');

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

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
        const resultados = imagesWithDescription.filter(image => {
            const descriptionMatch = image.description.toLowerCase().includes(query.toLowerCase());
            const keywordMatch = image.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()));
            return descriptionMatch || keywordMatch;
        });
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

    // Mezclar las imágenes al cargar la página
    shuffle(imagesWithDescription);
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

});






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
